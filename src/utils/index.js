export const fetchRequest = async (setUser, username, email, password) => {
    try {
        const response = await fetch("http://localhost:3001/user", {
            method: "POST",
            mode: "no-cors",
            headers: { "Content-Type" : "application/json" },
            body: JSON.stringify({
                username: username,
                email: email,
                password: password
            })
        });
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
};