interface CategoryProps{
    params: {
        categories: string[],
        searchParams: string[],
    }
}

export default function Category(props: CategoryProps){
    const {categories} = props.params
    console.log(props)
    return(
        <h1>categoria dinámica: {categories}</h1>
    )
}