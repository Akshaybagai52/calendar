// helpers/apiHelpers.ts
export const fetcher = async <T>(url: string): Promise<T> => {
// let token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJzYXRuYW1zaW5naDg1NjExQGdtYWlsLmNvbSIsImFwaV90b2tlbiI6Ims5MzBJbEVLcmpPRnhFemFxZ1I5Qk1UWE1CVlJad2QwQmNkQWVBUU5YV25Td3BRdnNGa3M1MGR0X0ZDdGxvOW9nMFEifSwiZXhwIjoxNzAxMzA5ODc5fQ.kUIT5cyjulkTPnE6FfziIgmz7wp3CohryoFcAtJGYbQ"

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        // Authorization:"Bearer " + `${token}`,
        Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJzYXRuYW1zaW5naDg1NjExQGdtYWlsLmNvbSIsImFwaV90b2tlbiI6Ims5MzBJbEVLcmpPRnhFemFxZ1I5Qk1UWE1CVlJad2QwQmNkQWVBUU5YV25Td3BRdnNGa3M1MGR0X0ZDdGxvOW9nMFEifSwiZXhwIjoxNzAxMzA5ODc5fQ.kUIT5cyjulkTPnE6FfziIgmz7wp3CohryoFcAtJGYbQ" ,
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    return await response.json();
  } catch (error: any) {
    throw new Error(`Error fetching data: ${error.message}`);
  }
};
