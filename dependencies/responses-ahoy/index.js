class preparedResponse {
    constructor(payload, page = 0, count = payload.length) {
        this.payload = payload
        this.page = page
        this.count = count
        this.prepare()
    }

    prepare() {
        this.payload = this.payload.slice(this.page, this.count)
        this.payload = {
            data: [...this.payload ],
            count: this.count,
            page: this.page,
        }
    }

    get result() {
        return this.payload
    }
}

module.exports = preparedResponse