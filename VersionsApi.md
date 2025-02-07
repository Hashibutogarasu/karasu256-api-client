# .VersionsApi

All URIs are relative to *https://api.karasu256.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**versionsControllerGet**](VersionsApi.md#versionsControllerGet) | **POST** /wiki/genshin/versions/get | 
[**versionsControllerGetAll**](VersionsApi.md#versionsControllerGetAll) | **GET** /wiki/genshin/versions | 
[**versionsControllerGetOne**](VersionsApi.md#versionsControllerGetOne) | **POST** /wiki/genshin/versions/getOne | 


# **versionsControllerGet**
> Array<VersionsEntity> versionsControllerGet(VersionsControllerGetRequest)


### Example


```typescript
import { createConfiguration, VersionsApi } from '';
import type { VersionsApiVersionsControllerGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new VersionsApi(configuration);

const request: VersionsApiVersionsControllerGetRequest = {
  
  VersionsControllerGetRequest: {
    id: "id_example",
    take: "10",
    skip: "0",
    name: "name_example",
    version_string: "version_string_example",
    released: true,
    createdAt: "createdAt_example",
    updatedAt: "updatedAt_example",
  },
};

const data = await apiInstance.versionsControllerGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **VersionsControllerGetRequest** | **VersionsControllerGetRequest**|  |


### Return type

**Array<VersionsEntity>**

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

# **versionsControllerGetAll**
> Array<VersionsEntity> versionsControllerGetAll()


### Example


```typescript
import { createConfiguration, VersionsApi } from '';

const configuration = createConfiguration();
const apiInstance = new VersionsApi(configuration);

const request = {};

const data = await apiInstance.versionsControllerGetAll(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<VersionsEntity>**

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

# **versionsControllerGetOne**
> VersionsEntity versionsControllerGetOne(VersionsControllerGetRequest)


### Example


```typescript
import { createConfiguration, VersionsApi } from '';
import type { VersionsApiVersionsControllerGetOneRequest } from '';

const configuration = createConfiguration();
const apiInstance = new VersionsApi(configuration);

const request: VersionsApiVersionsControllerGetOneRequest = {
  
  VersionsControllerGetRequest: {
    id: "id_example",
    take: "10",
    skip: "0",
    name: "name_example",
    version_string: "version_string_example",
    released: true,
    createdAt: "createdAt_example",
    updatedAt: "updatedAt_example",
  },
};

const data = await apiInstance.versionsControllerGetOne(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **VersionsControllerGetRequest** | **VersionsControllerGetRequest**|  |


### Return type

**VersionsEntity**

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


