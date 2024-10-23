<template>
	<div
		class="EventManager"
		@wheel="wheelHandler"
		@mousedown="mousedownHandler"
		@touchstart="touchStartHandler"
	>
		<slot></slot>
	</div>

</template>

<script lang="ts" setup>
type TEventManagerProps = {
	cycle?: boolean;
	forcedCurrent?: number;
	start?: number;
	throttle?: number;
	throttleConfig?: { [key: string]: number };
	enabled?: boolean;
	min?: number;
	max?: number | null;
	wheelDelta?: number;
	mousemoveDelta?: number;
	swipeDelta?: number;
	mousemoveEnabled?: boolean;
	wheelEnabled?: boolean;
	touchEnabled?: boolean;
	keydownEnabled?: boolean;
}
const emit = defineEmits([
	'throttle',
	'arrowPress',
	'change',
	'corner',
	'wheel',

	'mouseDown',
	'mouseMoving',
	'mouseSwipe',

	'touchStart',
	'touchMoving',
	'swipe',
	'horizontalSwipe',
	'verticalSwipe',
]);

const current = ref(0);
const throttled = ref(false);
const mouseEventData = ref({startX: null, startY: null, mousedown: false});
const touchEventData = ref({startX: null, startY: null, touchdown: false, multiTouch: false});

const props = withDefaults(defineProps<TEventManagerProps>(), {
	throttle: 1000,
	enabled: true,
	min: 0,
	max: null,
	wheelDelta: 1,
	mousemoveDelta: 10,
	swipeDelta: 60,
	wheelEnabled: true,
	touchEnabled: true,
	keydownEnabled: true,
	start: 0,
})
watch(
	() => props.forcedCurrent,
	(value: number | null) => {
		if (value === null) {
			return null;
		}

		current.value = value;
	},
	{immediate: true}
)

function throttleProxy(eventType: string): boolean {
	if (throttled.value || !props.enabled) {
		emit('throttle');
		return false;
	}

	throttled.value = true;

	const timeOut = props.throttleConfig?.[eventType] ?? props.throttle;

	setTimeout(() => (throttled.value = false), timeOut);

	return true;
}

function calculateCurrent(direction: number) {
	let corner = 0;
	let nextCurrent = current.value + direction;

	if (nextCurrent > props.max) {
		corner = 1;
		nextCurrent = props.cycle ? props.min : props.max;
	} else if (nextCurrent < props.min) {
		corner = -1;
		nextCurrent = props.cycle ? props.max : props.min;
	}

	current.value = nextCurrent;

	emit('change', {direction, current: current.value});

	if (corner) {
		emit('corner', corner);
	}
}


/** keydown */
function keydownHandler(event) {
	if (!throttleProxy('keydown')) {
		return null;
	}

	let direction = 0;

	if (['ArrowUp', 'ArrowLeft'].includes(event.key) || [37, 38].includes(Number(event.keyCode))) {
		direction = -1;
	}

	if (['ArrowDown', 'ArrowRight'].includes(event.key) || [39, 40].includes(Number(event.keyCode))) {
		direction = 1;
	}

	if (direction) {
		calculateCurrent(direction);
		emit('arrowPress', {direction});
	}
}


/** wheel */
function wheelHandler(event) {
	if (!props.wheelEnabled || !throttleProxy('wheel')) {
		return null;
	}

	if (Math.abs(event.deltaY) >= props.wheelDelta) {
		const direction = Math.sign(event.deltaY);
		calculateCurrent(direction);
		emit('wheel', {direction});
	}
}

/** mouseSwipe */
function mousedownHandler(event) {
	
	if (!props.mousemoveEnabled) {
		return null;
	}

	mouseEventData.value.startX = event.pageX;
	mouseEventData.value.startY = event.pageY;
	mouseEventData.value.mousedown = true;

	const data = {x: event.pageX, y: event.pageY};

	emit('mouseDown', data);

	window.addEventListener('mousemove', mousemoveHandler);
}

function mousemoveHandler(event) {
	if (!mouseEventData.value.mousedown) {
		return null;
	}

	window.addEventListener('mouseup', mouseupHandler);

	const data = {
		deltaX: mouseEventData.value.startX - event.offsetX,
		deltaY: mouseEventData.value.startY - event.offsetY,
	};

	emit('mouseMoving', data);
}

function mouseupHandler(event) {
	window.removeEventListener('mouseup', mouseupHandler);
	window.removeEventListener('mousemove', mousemoveHandler);

	if (!throttleProxy('mouseSwipe')) {
		return null;
	}

	mouseEventData.value.mousedown = false;

	const deltaX = mouseEventData.value.startX - event.pageX;
	const deltaY = mouseEventData.value.startY - event.pageY;

	const mousemoveDistance = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));

	if (mousemoveDistance < props.mousemoveDelta) {
		return null;
	}

	const horizontalDirection = (Math.abs(deltaX) > Math.abs(deltaY)) ? ((deltaX > 0) ? 1 : -1) : 0;
	const verticalDirection = (Math.abs(deltaY) > Math.abs(deltaX)) ? ((deltaY > 0) ? 1 : -1) : 0;

	const data = {
		deltaX,
		deltaY,
		horizontalDirection,
		verticalDirection,
	};

	calculateCurrent(horizontalDirection || verticalDirection);
	emit('mouseSwipe', data);
}

/** touchSwipe */
function touchStartHandler(event) {
	if (!props.touchEnabled) {
		return null;
	}

	touchEventData.value.startX = event?.touches?.[0]?.pageX;
	touchEventData.value.startY = event?.touches?.[0]?.pageY;
	touchEventData.value.touchdown = true;
	const data = {
		x: touchEventData.value.startX,
		y: touchEventData.value.startY,
	};

	emit('touchStart', data);

	window.addEventListener('touchmove', touchmoveHandler);
}

function touchmoveHandler(event) {
	if (!touchEventData.value.touchdown) {
		return null;
	}

	window.addEventListener('touchend', touchendHandler);

	if (event.touches?.length > 1) {
		touchEventData.value.multiTouch = true;
	}

	emit('touchMoving');
}

function touchendHandler(event) {
	window.removeEventListener('touchmove', touchmoveHandler);
	window.removeEventListener('touchend', touchendHandler);

	touchEventData.value.touchdown = false;
	touchEventData.value.multiTouch = false;

	const deltaX = touchEventData.value.startX - event?.changedTouches?.[0]?.pageX;
	const deltaY = touchEventData.value.startY - event?.changedTouches?.[0]?.pageY;

	const touchmoveDistance = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));

	if (touchmoveDistance < props.swipeDelta) {
		return null;
	}

	const horizontalDirection = (Math.abs(deltaX) > Math.abs(deltaY)) ? ((deltaX > 0) ? 1 : -1) : 0;
	const verticalDirection = (Math.abs(deltaY) > Math.abs(deltaX)) ? ((deltaY > 0) ? 1 : -1) : 0;

	const data = {
		deltaX,
		deltaY,
		horizontalDirection,
		verticalDirection,
	};

	calculateCurrent(horizontalDirection || verticalDirection);
	emit('mouseSwipe', data);

	if (horizontalDirection) {
		emit('horizontalSwipe', horizontalDirection);
	}
	if (verticalDirection) {
		emit('verticalSwipe', verticalDirection);
	}
}


onMounted(() => {
	if (props.start !== null) {
		current.value = props.start;
	}

	if (props.keydownEnabled) {
		window.addEventListener('keydown', keydownHandler);
	}
})

onBeforeUnmount(() => {
	window.removeEventListener('mouseup', mouseupHandler);
	window.removeEventListener('mousemove', mousemoveHandler);
})
</script>

<style lang="scss">

.EventManager {
        width: 100%;
        height: 100%;

        &, * {
                user-select: none !important;
        }

        img, picture {
                pointer-events: none;
        }

}
</style>
