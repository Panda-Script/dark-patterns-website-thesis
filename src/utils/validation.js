export const validateUsername = (username) => {
    const trimmed = username.trim();

    if (!trimmed) {
        return { valid: false, message: 'Username is required please'};
    }

    if (trimmed.length < 3) {
        return { valid: false, message: 'Bruh. Username has to be at lease 3 characters.'};
    }

    if (trimmed.length > 20) {
        return { valid: false, message: 'No. Thats too long. Less than 20'};

    }

    if (!/^[a-zA-Z0-9_]+$/.test(trimmed)) {
        return { 
            valid: false, 
            message: 'Username can only contain letters, numbers, and underscores' 
        };
    }

    return {valid: true};
};