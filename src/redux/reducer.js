const initialValue = {
    owner:{
        name: 'Nancy',
        img: 'https://rukminim1.flixcart.com/image/416/416/jq8dgnk0/poster/z/z/b/medium-baby-poster-the-boos-baby-cartoon-12x18-paper-print-be-original-imafc8harrywqghc.jpeg?q=70'
    },
    friends:[{
        frnd1:{
            name:'Fathima',
            img: 'https://i.pinimg.com/736x/ea/69/dc/ea69dc6226e72a33f82d3add20b470df.jpg'
        },
        frnd2:{
            name:'MathuPriya',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7yrOz-pSbkPExUNnvVzAl_HrRpVqBDR5wFQ&usqp=CAU'
        },
        frnd2:{
            name:'Sandhiya',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnhOkAMhuTO0dmCV4LVdJkp54xG9gHcEgLJQ&usqp=CAU'
        },
    }],

}

const reducer =(state=initialValue,action)=>{
    switch(action.type){
        default: return state
    }
}

export default reducer