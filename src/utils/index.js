export const fetchRequest = async (setUser, username, email, password) => {
    try {
      const response = await fetch(process.env.REACT_APP_REST_API, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      });
      const data = await response.json();
      setUser(data);
    } catch (error) {
      console.log(error);
    }
  };

export const fetchDelete = async (setUser, username) => {
    try {
      const response = await fetch(process.env.REACT_APP_REST_API, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });
      const data = await response.json();
      setUser(data);
    } catch (error) {
      console.log(error);
    }
  };

export const fetchUpdate = async (username) => {
    try {
        const response = await fetch(process.env.REACT_APP_REST_API, {
            method: "PUT",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify({
                username
            }),
        })

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
};

export const fetchList = async (username, email, password) => {
    try {
        const response = await fetch(process.env.REACT_APP_REST_API, {
            method: "GET",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify({
                username,
                email,
                password
            }),
        })

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
};

// export const fetchUpdate = async (username, email, password) => {
//     try {
//         // Update
//         const update = await fetch(process.env.REACT_APP_REST_API, {
//             method: "PUT",
//             headers: {"Content-Type" : "application/json"},
//         })
//     } catch (error) {
//         console.log(error);
//     }
// };