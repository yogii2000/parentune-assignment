const baseUrl = "https://api9.parentune.com/content/v2/dailyfocus"

export const getData = async()=>{
    try {
        const response = await fetch(baseUrl,{
            method:'GET',
            headers:{
              'accept' :'application/json, text/plain, */*',
              'accept-language':'en-US,en;q=0.9',
              'authtoken':'9467c5b4e290227a2a270f4a1ec2a37643b4a5dfd90a993b4e6ceb61ea0d5b5a',
              'instanceid':'c4b50b993092ab3ed5f35ad684f82b4e6d081a4ed65c49902d80dde82183057a',
              'origin':'https://www.parentune.com'
            }
          })
          const data = response.json()
          return data
    } catch (error) {
        console.log(error)
  return error
    }


}