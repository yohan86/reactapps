const data =[
    {
        label:"Home",
        to:'/',
    },
    {
        label: "Location",
        to:"/location",
        children:[
            {
                label:"Country",
                to:"/country",
                children:[
                    {
                        label:"City",
                        to:"/city",
                    }
                ]
            }
        ]
    },
    {
        label:"Contact",
        to:"/contact",
    },
    {
        label:"Contact2",
        to:"/contact",
    }
]


export default data;