# .ArtifactsApi

All URIs are relative to *https://api.karasu256.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**artifactsControllerGet**](ArtifactsApi.md#artifactsControllerGet) | **POST** /wiki/genshin/artifacts/get | 
[**artifactsControllerGetAll**](ArtifactsApi.md#artifactsControllerGetAll) | **GET** /wiki/genshin/artifacts | 
[**artifactsControllerGetOne**](ArtifactsApi.md#artifactsControllerGetOne) | **POST** /wiki/genshin/artifacts/getOne | 


# **artifactsControllerGet**
> Array<Artifacts> artifactsControllerGet(ArtifactsControllerGetRequest)


### Example


```typescript
import { createConfiguration, ArtifactsApi } from '';
import type { ArtifactsApiArtifactsControllerGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ArtifactsApi(configuration);

const request: ArtifactsApiArtifactsControllerGetRequest = {
  
  ArtifactsControllerGetRequest: {
    id: "id_example",
    take: "10",
    skip: "0",
    name: "name_example",
    description: "description_example",
    icon_url: "icon_url_example",
    one_set_effect: "one_set_effect_example",
    two_set_effect: "two_set_effect_example",
    four_set_effect: "four_set_effect_example",
    version: "version_example",
  },
};

const data = await apiInstance.artifactsControllerGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ArtifactsControllerGetRequest** | **ArtifactsControllerGetRequest**|  |


### Return type

**Array<Artifacts>**

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

# **artifactsControllerGetAll**
> Array<Artifacts> artifactsControllerGetAll()


### Example


```typescript
import { createConfiguration, ArtifactsApi } from '';

const configuration = createConfiguration();
const apiInstance = new ArtifactsApi(configuration);

const request = {};

const data = await apiInstance.artifactsControllerGetAll(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<Artifacts>**

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

# **artifactsControllerGetOne**
> Artifacts artifactsControllerGetOne(ArtifactsControllerGetRequest)


### Example


```typescript
import { createConfiguration, ArtifactsApi } from '';
import type { ArtifactsApiArtifactsControllerGetOneRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ArtifactsApi(configuration);

const request: ArtifactsApiArtifactsControllerGetOneRequest = {
  
  ArtifactsControllerGetRequest: {
    id: "id_example",
    take: "10",
    skip: "0",
    name: "name_example",
    description: "description_example",
    icon_url: "icon_url_example",
    one_set_effect: "one_set_effect_example",
    two_set_effect: "two_set_effect_example",
    four_set_effect: "four_set_effect_example",
    version: "version_example",
  },
};

const data = await apiInstance.artifactsControllerGetOne(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ArtifactsControllerGetRequest** | **ArtifactsControllerGetRequest**|  |


### Return type

**Artifacts**

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


