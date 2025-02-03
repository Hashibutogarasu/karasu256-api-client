# .ArtifactSetsApi

All URIs are relative to *https://api.karasu256.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**artifactSetsControllerCreate**](ArtifactSetsApi.md#artifactSetsControllerCreate) | **POST** /wiki/genshin/artifact-sets | 
[**artifactSetsControllerDelete**](ArtifactSetsApi.md#artifactSetsControllerDelete) | **DELETE** /wiki/genshin/artifact-sets/{id} | 
[**artifactSetsControllerGet**](ArtifactSetsApi.md#artifactSetsControllerGet) | **GET** /wiki/genshin/artifact-sets | 
[**artifactSetsControllerGetOne**](ArtifactSetsApi.md#artifactSetsControllerGetOne) | **GET** /wiki/genshin/artifact-sets/getOne | 
[**artifactSetsControllerUpdate**](ArtifactSetsApi.md#artifactSetsControllerUpdate) | **PUT** /wiki/genshin/artifact-sets | 


# **artifactSetsControllerCreate**
> ArtifactSets artifactSetsControllerCreate(artifactsControllerCreateRequest)


### Example


```typescript
import { createConfiguration, ArtifactSetsApi } from '';
import type { ArtifactSetsApiArtifactSetsControllerCreateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ArtifactSetsApi(configuration);

const request: ArtifactSetsApiArtifactSetsControllerCreateRequest = {
  
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

const data = await apiInstance.artifactSetsControllerCreate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **artifactsControllerCreateRequest** | **ArtifactsControllerCreateRequest**|  |


### Return type

**ArtifactSets**

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

# **artifactSetsControllerDelete**
> void artifactSetsControllerDelete()


### Example


```typescript
import { createConfiguration, ArtifactSetsApi } from '';
import type { ArtifactSetsApiArtifactSetsControllerDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ArtifactSetsApi(configuration);

const request: ArtifactSetsApiArtifactSetsControllerDeleteRequest = {
  
  id: "id_example",
};

const data = await apiInstance.artifactSetsControllerDelete(request);
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

# **artifactSetsControllerGet**
> Array<ArtifactSets> artifactSetsControllerGet()


### Example


```typescript
import { createConfiguration, ArtifactSetsApi } from '';
import type { ArtifactSetsApiArtifactSetsControllerGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ArtifactSetsApi(configuration);

const request: ArtifactSetsApiArtifactSetsControllerGetRequest = {
  
  query: {
    id: "id_example",
    createdAt: null,
    updatedAt: null,
  },
};

const data = await apiInstance.artifactSetsControllerGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **ArtifactSetsControllerGetQueryParameter** |  | defaults to undefined


### Return type

**Array<ArtifactSets>**

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

# **artifactSetsControllerGetOne**
> ArtifactSets artifactSetsControllerGetOne()


### Example


```typescript
import { createConfiguration, ArtifactSetsApi } from '';
import type { ArtifactSetsApiArtifactSetsControllerGetOneRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ArtifactSetsApi(configuration);

const request: ArtifactSetsApiArtifactSetsControllerGetOneRequest = {
  
  query: {
    id: "id_example",
    createdAt: null,
    updatedAt: null,
  },
};

const data = await apiInstance.artifactSetsControllerGetOne(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **ArtifactSetsControllerGetQueryParameter** |  | defaults to undefined


### Return type

**ArtifactSets**

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

# **artifactSetsControllerUpdate**
> void artifactSetsControllerUpdate(artifactsControllerUpdateRequest)


### Example


```typescript
import { createConfiguration, ArtifactSetsApi } from '';
import type { ArtifactSetsApiArtifactSetsControllerUpdateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ArtifactSetsApi(configuration);

const request: ArtifactSetsApiArtifactSetsControllerUpdateRequest = {
  
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

const data = await apiInstance.artifactSetsControllerUpdate(request);
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


