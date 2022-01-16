const initialValue = {
    owner:{
        name: 'Nancy',
        img: 'https://m.media-amazon.com/images/I/41lfJiRMNLL.jpg',
    },
    friends:[{
        frnd:{
            name:'Fathima',
            img: 'https://i.pinimg.com/736x/ea/69/dc/ea69dc6226e72a33f82d3add20b470df.jpg',
            card: 'https://wallpapercave.com/wp/wp2568543.jpg',
            post:'https://scontent.fmaa1-1.fna.fbcdn.net/v/t39.30808-6/271814960_5028014397262244_3628416469630599036_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=9267fe&_nc_ohc=SB2TgkFVG3kAX9KNaxp&_nc_ht=scontent.fmaa1-1.fna&oh=00_AT94cs_IWeDTOAUebj_7mPq5a02BTDcsHAKIwtnckaueNA&oe=61E523F9'
        }},
        {
        frnd:{
            name:'MathuPriya',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7yrOz-pSbkPExUNnvVzAl_HrRpVqBDR5wFQ&usqp=CAU',
            card:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSctN2rG-zg8-DPW6uqERy070rS7LGvkoQXZA&usqp=CAU',
            post: 'https://scontent.fmaa1-4.fna.fbcdn.net/v/t39.30808-6/p526x296/270042879_3117179981941750_4976464766257866658_n.png?_nc_cat=1&ccb=1-5&_nc_sid=730e14&_nc_ohc=SKFiJ1a8HxMAX_pa-vy&_nc_ht=scontent.fmaa1-4.fna&oh=00_AT_fE5xlZGwR2qqRq9pTYD4766T_dIuJuO4pHYfyXdkKsQ&oe=61E646DC'
        }},
        {frnd:{
            name:'Sandhiya',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnhOkAMhuTO0dmCV4LVdJkp54xG9gHcEgLJQ&usqp=CAU',
            card: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdpDiEszcVPZk4paSBhNlCIfYT9cdg9kmaSw&usqp=CAU',
            post: 'https://scontent.fmaa1-4.fna.fbcdn.net/v/t39.30808-6/p526x296/271660815_3196857083875670_4912592207311900645_n.jpg?_nc_cat=1&_nc_rgb565=1&ccb=1-5&_nc_sid=9267fe&_nc_ohc=oxFG9yWqEQwAX9r-CGv&_nc_ht=scontent.fmaa1-4.fna&oh=00_AT_gWT71HKjUSCjGdUlk-jq3lOcM09_FTonXQlhcFW28jw&oe=61E510CB'
        },
    }],
}

const reducer =(state=initialValue,action)=>{
    switch(action.type){
        default: return state
    }
}

export default reducer