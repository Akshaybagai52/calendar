export const StateNamesData = async (countryValue) => {
    console.log(countryValue,"cont")
    const response = await fetch(`https://www.universal-tutorial.com/api/states/`+`${countryValue}`, {
        method: 'GET',
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJzYXRuYW1zaW5naDg1NjExQGdtYWlsLmNvbSIsImFwaV90b2tlbiI6Ims5MzBJbEVLcmpPRnhFemFxZ1I5Qk1UWE1CVlJad2QwQmNkQWVBUU5YV25Td3BRdnNGa3M1MGR0X0ZDdGxvOW9nMFEifSwiZXhwIjoxNzAxMTYwMzQxfQ.gEOTWm2AVFYZ-CkEj7huyRVpcJUNIpOLdNDfSLvzzMI",
            "Accept": "application/json"
        },
    });

    if (response.ok) {
        const data = await response.json();
        console.log(data,"secc")
      return data
        
    } else {
        throw new Error('Request failed');
    }
}
