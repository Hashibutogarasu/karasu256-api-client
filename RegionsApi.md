# .RegionsApi

All URIs are relative to *https://api.karasu256.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**countriesControllerGet**](RegionsApi.md#countriesControllerGet) | **POST** /wiki/genshin/regions/get | 
[**countriesControllerGetAll**](RegionsApi.md#countriesControllerGetAll) | **GET** /wiki/genshin/regions | 
[**countriesControllerGetOne**](RegionsApi.md#countriesControllerGetOne) | **POST** /wiki/genshin/regions/getOne | 


# **countriesControllerGet**
> Array<Country> countriesControllerGet(CountriesControllerGetRequest)


### Example


```typescript
import { createConfiguration, RegionsApi } from '';
import type { RegionsApiCountriesControllerGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new RegionsApi(configuration);

const request: RegionsApiCountriesControllerGetRequest = {
  
  CountriesControllerGetRequest: {
    id: "id_example",
    take: "10",
    skip: "0",
    name: "name_example",
    description: "description_example",
    icon_url: "icon_url_example",
    version: "version_example",
  },
};

const data = await apiInstance.countriesControllerGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **CountriesControllerGetRequest** | **CountriesControllerGetRequest**|  |


### Return type

**Array<Country>**

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

# **countriesControllerGetAll**
> Array<Country> countriesControllerGetAll()


### Example


```typescript
import { createConfiguration, RegionsApi } from '';

const configuration = createConfiguration();
const apiInstance = new RegionsApi(configuration);

const request = {};

const data = await apiInstance.countriesControllerGetAll(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


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
> Country countriesControllerGetOne(CountriesControllerGetRequest)


### Example


```typescript
import { createConfiguration, RegionsApi } from '';
import type { RegionsApiCountriesControllerGetOneRequest } from '';

const configuration = createConfiguration();
const apiInstance = new RegionsApi(configuration);

const request: RegionsApiCountriesControllerGetOneRequest = {
  
  CountriesControllerGetRequest: {
    id: "id_example",
    take: "10",
    skip: "0",
    name: "name_example",
    description: "description_example",
    icon_url: "icon_url_example",
    version: "version_example",
  },
};

const data = await apiInstance.countriesControllerGetOne(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **CountriesControllerGetRequest** | **CountriesControllerGetRequest**|  |


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


