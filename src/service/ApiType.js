export type Error = {
    code: number,
    message: string,
    detail: Object
}

export type ApiResponse<D> = {
    error: Error,
    data: D
}
