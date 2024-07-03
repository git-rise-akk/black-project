const responseBase = {
    status: 200,
    message: "ok",
};

export default defineEventHandler(async (event) => {
    const res = { ...responseBase };
    const body = await readBody(event);

    if (body.isDev) {
        if (body.status) res.status = body.status;
        if (body.message) res.status = body.message;
        return res;
    }

    return res;
});
