export type Error = {
    code: number,
    message: string,
    detail: Object
}

export type ApiResponse<D> = {
    error: Error,
    data: D
}

export type Client = {
    id: number,
    name: string,
}
