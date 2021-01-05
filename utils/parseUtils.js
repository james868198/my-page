function parseDate(date) {
    return new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short'}).format(new Date(Date.parse(date)))
}
export { parseDate };
