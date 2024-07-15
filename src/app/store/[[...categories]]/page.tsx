import { ProductsWrapper } from "app/components/Store/ProductWrapper"
import { getCollectionProducts, getCollections } from "app/services/shopify/collections"
import { getProducts } from "app/services/shopify/products"
import { get } from "http"


interface CategoryProps{
    params: {
        categories: string[],
    }
    searchParams?: string,
}

export default async function Category(props: CategoryProps){
    const {categories} = props.params
    let products = await getProducts()
    const collections = await getCollections()
    const selectedCollectionId = collections.find((collection) => collection.handle === categories[0]).id
    // console.log(selectedCollectionId)
    const productsByCollection = await getCollectionProducts(selectedCollectionId)
    console.log("productsByCollection", productsByCollection)

    if(selectedCollectionId){
        products = await getCollectionProducts(selectedCollectionId)
    }else{
        products = await getProducts()
    }

    return(
        <ProductsWrapper products = {products}/>
    )
}