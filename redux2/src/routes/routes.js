import App from "../components/App"

export default
    [
        {
            path: "/",
            component: App,
            exact: true
        },
        {
            path: "/home",
            component : App,
            exact : false
        }
    ]
