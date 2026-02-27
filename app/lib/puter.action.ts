import puter from "@heyputer/puter.js";

export const signIn = async () => {
    return await puter.auth.signIn()
}

export const signOut = async () => {
    return puter.auth.signOut();
}

export const getCurrentUser = async () => {
    try {
        const user = await puter.auth.getUser();
        return user;
    } catch (error) {
        console.error(error);
        return null
    }
}