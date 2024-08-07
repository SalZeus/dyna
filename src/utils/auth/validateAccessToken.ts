import { GraphQLClientSingleton } from "app/graphql"
import { customerName } from "app/graphql/queries/customerName"
import { cookies } from "next/headers"

export const validateAccessToken = async () => {
    const cookiesStore = cookies()
    const accessToken = cookiesStore.get("accessToken")?.value

    console.log("AccessToken en validateAccessToken:", accessToken)  // Añade este log para verificar el accessToken

    if (!accessToken) {
        return null
    }

    const graphqlClient = GraphQLClientSingleton.getInstance().getClient()
    const { customer } = await graphqlClient.request(customerName, {
        customerAccessToken: accessToken
    })

    console.log("Customer en validateAccessToken:", customer)  // Añade este log para verificar el customer


    return customer
}
