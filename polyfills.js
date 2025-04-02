if (!URL.canParse) {
    URL.canParse = (url) => {
        try {
            new URL(url);
            return true;
        } catch {
            return false;
        }
    };
}
