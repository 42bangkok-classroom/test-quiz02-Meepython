import axios from "axios"

interface userResult{
    id: number
    name: string
    address: {
        street: string
        suite: string
        city: string
        zipcode: string
        geo: {
            lat: string
            lng: string
        }
    }[]
}

export const safeFetchUser = async (userId: number): Promise<userResult[]> => {
    try {
      const url = `https://api.example.com/users/${userId}`
      const { data } = await axios.get<userResult[]>(url)
      if (!data || data.length === 0) {
        return [];
      }
      // This is butthole and bull shit :(
      const result: userResult[] = []
      result.push({
         id: UserId,
         name: 'string',
         address: {
            street: string,
            suite: string,
            city: string,
            zipcode: string,
            geo: {
                lat: string,
                lng: string,
            }
        }[]
      })

      return result

    } catch (error) {
       if (axios.isAxiosError(error)) {
          throw new Error(`Failed : ${error.message}`);
       } else {
          throw new Error('Unkown Error');
       }
    }
};

