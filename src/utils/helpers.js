const formatDateTime = datetime => {
    const time = new Date(datetime);

    return `${time.getHours()}:${time.getMinutes()}`;
}

export { formatDateTime };
