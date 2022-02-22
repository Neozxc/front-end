export const fetchRequest = async () => {
    try {
        const response = await fetch("http://localhost:3200/user", {
            method: "POST",
            headers: { "Content-Type" : "application/json" },
            body: JSON.stringify({
                username: "Nedas",
                email: "nedas@gmail.com",
                password: ""
            })
        });

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
};