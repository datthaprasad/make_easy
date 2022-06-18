let constants = {}
constants.ADMIN_MENU=[
    {
        name: 'Home',
        navigate: '/',
        handler: () => {}
    },
    {
        name: 'Add Service',
        navigate: '/addservice',
        handler: () => {}
    },
    {
        name: 'Services',
        navigate: '/listservice',
        handler: () => {}
    },
    {
        name: 'Logout',
        navigate: '/logout',
        type: 'button'
    }

]
constants.USER_MENU=[
    {
        name: 'Home',
        navigate: '/',
        handler: () => {}
    },
    {
        name: 'Services',
        navigate: '/listservice',
        handler: () => {}
    },
    {
        name: 'Logout',
        navigate: '/logout',
        type: 'button'
    }
]
constants.SERVICE_PROVISER_MENU=[
    {
        name: 'Home',
        navigate: '/',
        handler: () => {}
    },
    {
        name: 'Services',
        navigate: '/listservice',
        handler: () => {}
    },
    {
        name: 'Logout',
        navigate: '/logout',
        type: 'button'
    }
]
constants.DEFAULT_MENU =[
    {
        name: 'Home',
        navigate: '/',
        handler: () => {}
    },
    {
        name: 'Login',
        navigate: '/login',
        type: 'button'
    },
    {
        name: 'Register',
        navigate: '/register',
        type: 'button'
    }
]

constants.USER_TYPE ={
    ADMIN:3,
    SERVICE_PROVIDER:2,
    NORMAL_USER:1
}
export default constants;