# .CountriesApi

All URIs are relative to *https://api.karasu256.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**countriesControllerCreate**](CountriesApi.md#countriesControllerCreate) | **POST** /wiki/genshin/countries | 
[**countriesControllerDelete**](CountriesApi.md#countriesControllerDelete) | **DELETE** /wiki/genshin/countries/{id} | 
[**countriesControllerGet**](CountriesApi.md#countriesControllerGet) | **GET** /wiki/genshin/countries | 
[**countriesControllerGetOne**](CountriesApi.md#countriesControllerGetOne) | **GET** /wiki/genshin/countries/getOne | 
[**countriesControllerUpdate**](CountriesApi.md#countriesControllerUpdate) | **PUT** /wiki/genshin/countries | 


# **countriesControllerCreate**
> Country countriesControllerCreate(countriesControllerCreateRequest)


### Example


```typescript
import { createConfiguration, CountriesApi } from '';
import type { CountriesApiCountriesControllerCreateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CountriesApi(configuration);

const request: CountriesApiCountriesControllerCreateRequest = {
  
  countriesControllerCreateRequest: {
    name: "name_example",
    description: "description_example",
    iconUrl: "iconUrl_example",
    sumbnailUrl: "sumbnailUrl_example",
    version: "1.0",
  },
};

const data = await apiInstance.countriesControllerCreate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **countriesControllerCreateRequest** | **CountriesControllerCreateRequest**|  |


### Return type

**Country**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **countriesControllerDelete**
> void countriesControllerDelete()


### Example


```typescript
import { createConfiguration, CountriesApi } from '';
import type { CountriesApiCountriesControllerDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CountriesApi(configuration);

const request: CountriesApiCountriesControllerDeleteRequest = {
  
  id: "id_example",
};

const data = await apiInstance.countriesControllerDelete(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **countriesControllerGet**
> Array<Country> countriesControllerGet()


### Example


```typescript
import { createConfiguration, CountriesApi } from '';
import type { CountriesApiCountriesControllerGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CountriesApi(configuration);

const request: CountriesApiCountriesControllerGetRequest = {
  
  query: {
    id: "id_example",
    name: "name_example",
    description: "description_example",
    iconUrl: "iconUrl_example",
    version: "1.0",
  },
};

const data = await apiInstance.countriesControllerGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **CountriesControllerGetQueryParameter** |  | defaults to undefined


### Return type

**Array<Country>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **countriesControllerGetOne**
> Country countriesControllerGetOne()


### Example


```typescript
import { createConfiguration, CountriesApi } from '';
import type { CountriesApiCountriesControllerGetOneRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CountriesApi(configuration);

const request: CountriesApiCountriesControllerGetOneRequest = {
  
  query: {
    id: "id_example",
    name: "name_example",
    description: "description_example",
    iconUrl: "iconUrl_example",
    version: "1.0",
  },
};

const data = await apiInstance.countriesControllerGetOne(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **CountriesControllerGetQueryParameter** |  | defaults to undefined


### Return type

**Country**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **countriesControllerUpdate**
> void countriesControllerUpdate(countriesControllerUpdateRequest)


### Example


```typescript
import { createConfiguration, CountriesApi } from '';
import type { CountriesApiCountriesControllerUpdateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CountriesApi(configuration);

const request: CountriesApiCountriesControllerUpdateRequest = {
  
  countriesControllerUpdateRequest: {
    id: "id_example",
    name: "name_example",
    description: "description_example",
    iconUrl: "iconUrl_example",
    version: "1.0",
  },
};

const data = await apiInstance.countriesControllerUpdate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **countriesControllerUpdateRequest** | **CountriesControllerUpdateRequest**|  |


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


