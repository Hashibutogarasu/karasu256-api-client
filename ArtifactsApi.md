# .ArtifactsApi

All URIs are relative to *https://api.karasu256.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**artifactsControllerCreate**](ArtifactsApi.md#artifactsControllerCreate) | **POST** /wiki/genshin/artifacts | 
[**artifactsControllerDelete**](ArtifactsApi.md#artifactsControllerDelete) | **DELETE** /wiki/genshin/artifacts/{id} | 
[**artifactsControllerGet**](ArtifactsApi.md#artifactsControllerGet) | **GET** /wiki/genshin/artifacts | 
[**artifactsControllerGetOne**](ArtifactsApi.md#artifactsControllerGetOne) | **GET** /wiki/genshin/artifacts/getOne | 
[**artifactsControllerUpdate**](ArtifactsApi.md#artifactsControllerUpdate) | **PUT** /wiki/genshin/artifacts | 


# **artifactsControllerCreate**
> Artifacts artifactsControllerCreate(artifactsControllerCreateRequest)


### Example


```typescript
import { createConfiguration, ArtifactsApi } from '';
import type { ArtifactsApiArtifactsControllerCreateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ArtifactsApi(configuration);

const request: ArtifactsApiArtifactsControllerCreateRequest = {
  
  artifactsControllerCreateRequest: {
    name: "name_example",
    description: "description_example",
    iconUrl: "iconUrl_example",
    oneSetEffect: "oneSetEffect_example",
    twoSetEffect: "twoSetEffect_example",
    fourSetEffect: "fourSetEffect_example",
    version: "1.0",
  },
};

const data = await apiInstance.artifactsControllerCreate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **artifactsControllerCreateRequest** | **ArtifactsControllerCreateRequest**|  |


### Return type

**Artifacts**

### Authorization

[bearer](README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **artifactsControllerDelete**
> void artifactsControllerDelete()


### Example


```typescript
import { createConfiguration, ArtifactsApi } from '';
import type { ArtifactsApiArtifactsControllerDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ArtifactsApi(configuration);

const request: ArtifactsApiArtifactsControllerDeleteRequest = {
  
  id: "id_example",
};

const data = await apiInstance.artifactsControllerDelete(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

[bearer](README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **artifactsControllerGet**
> Array<Artifacts> artifactsControllerGet()


### Example


```typescript
import { createConfiguration, ArtifactsApi } from '';
import type { ArtifactsApiArtifactsControllerGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ArtifactsApi(configuration);

const request: ArtifactsApiArtifactsControllerGetRequest = {
  
  query: {
    id: "id_example",
    createdAt: null,
    updatedAt: null,
    name: "name_example",
    description: "description_example",
    iconUrl: "iconUrl_example",
    oneSetEffect: "oneSetEffect_example",
    twoSetEffect: "twoSetEffect_example",
    fourSetEffect: "fourSetEffect_example",
    version: "1.0",
  },
};

const data = await apiInstance.artifactsControllerGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **ArtifactsControllerGetQueryParameter** |  | defaults to undefined


### Return type

**Array<Artifacts>**

### Authorization

[bearer](README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **artifactsControllerGetOne**
> Artifacts artifactsControllerGetOne()


### Example


```typescript
import { createConfiguration, ArtifactsApi } from '';
import type { ArtifactsApiArtifactsControllerGetOneRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ArtifactsApi(configuration);

const request: ArtifactsApiArtifactsControllerGetOneRequest = {
  
  query: {
    id: "id_example",
    createdAt: null,
    updatedAt: null,
    name: "name_example",
    description: "description_example",
    iconUrl: "iconUrl_example",
    oneSetEffect: "oneSetEffect_example",
    twoSetEffect: "twoSetEffect_example",
    fourSetEffect: "fourSetEffect_example",
    version: "1.0",
  },
};

const data = await apiInstance.artifactsControllerGetOne(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **ArtifactsControllerGetQueryParameter** |  | defaults to undefined


### Return type

**Artifacts**

### Authorization

[bearer](README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **artifactsControllerUpdate**
> void artifactsControllerUpdate(artifactsControllerUpdateRequest)


### Example


```typescript
import { createConfiguration, ArtifactsApi } from '';
import type { ArtifactsApiArtifactsControllerUpdateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ArtifactsApi(configuration);

const request: ArtifactsApiArtifactsControllerUpdateRequest = {
  
  artifactsControllerUpdateRequest: {
    id: "id_example",
    name: "name_example",
    description: "description_example",
    iconUrl: "iconUrl_example",
    oneSetEffect: "oneSetEffect_example",
    twoSetEffect: "twoSetEffect_example",
    fourSetEffect: "fourSetEffect_example",
    version: "1.0",
  },
};

const data = await apiInstance.artifactsControllerUpdate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **artifactsControllerUpdateRequest** | **ArtifactsControllerUpdateRequest**|  |


### Return type

**void**

### Authorization

[bearer](README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


