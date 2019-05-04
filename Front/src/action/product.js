import Axios from "axios";


const_addProudct=(product)=>({
    type:'ADD_PRODUCT',
    product
})
export const addProduct=(productData={

})=>{
    return(dispatch)=>{
        const product = {
            test:''
        
    };
    return Axios.post('/product',product).then(result=>{
        dispatch(_addProduct(result.data)); 
        });
    }
}
const _removeProduct=({id}={})=>({
    type: 'REMOVE_PRODUCT',
    id
});

export const removeProduct=({id}={})=>{
    return(dispatch)=>{
        return Axios.delete('product/${id}').then(()=>{
            dispatch(_removeProduct({id}));
        })
    }
};

const _editProduct=(id,updates)=>({
    type:'EDIT_PRODUCT',
    id,
    updates
});

export const editProduct=(id,updates)=>{
    return(dispatch)=>{
        return Axios.put('product/${id}').then(()=>{
            dispatch(_editProduct(id,updates));
        });
    }
}
const _getProduct=(product)=>({
    type: 'GET_PRODUCTLIST',
    product
})

export const GET_PRODUCTLIST=()=>{
    return(dispatch)=>{
        return Axios.get('product').then(result=>{
            const product=[];

            result.data.forEach(item => {
                product.push(item);
            });

            dispatch(_getProduct(product));
        })
    }
}