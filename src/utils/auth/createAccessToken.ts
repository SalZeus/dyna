import { GraphQLClientSingleton } from "app/graphql"
import { customerAccessTokenCreateMutation } from "app/graphql/mutations/customerAccessTokenCreate"
import { cookies } from 'next/headers'

export const createAccessToken = async (email: string, password: string) => {
  const cookiesStore = cookies()
  const graphqlClient = GraphQLClientSingleton.getInstance().getClient()
  const { customerAccessTokenCreate } = await graphqlClient.request(customerAccessTokenCreateMutation, {
    "email": email,
    "password": password
  })
  
  const { accessToken, expiresAt } = customerAccessTokenCreate?.customerAccessToken
  console.log(accessToken)

  if(accessToken){
    cookiesStore.set("accessToken", accessToken, {
      path: "/",
      expires: new Date(expiresAt),
      httpOnly: true,
      sameSite: "strict"
    })

    return accessToken
  }
}

// try {
//   const response = await graphqlClient.request(customerAccessTokenCreateMutation, {
//     "email": email,
//     "password": password
//   })
//   const { customerAccessTokenCreate } = response
//   // ... rest of your code using customerAccessTokenCreate
// } catch (error) {
//   console.error("Error creating access token:", error)
//   // Handle the error appropriately (e.g., display an error message to the user)
// }