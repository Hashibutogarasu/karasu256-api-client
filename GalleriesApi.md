# .GalleriesApi

All URIs are relative to *https://api.karasu256.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**galleriesControllerCreate**](GalleriesApi.md#galleriesControllerCreate) | **POST** /galleries/admin | 
[**galleriesControllerDelete**](GalleriesApi.md#galleriesControllerDelete) | **DELETE** /galleries/admin/{id} | 
[**galleriesControllerGet**](GalleriesApi.md#galleriesControllerGet) | **POST** /wiki/galleries | 
[**galleriesControllerGetAll**](GalleriesApi.md#galleriesControllerGetAll) | **GET** /wiki/galleries | 
[**galleriesControllerGetOne**](GalleriesApi.md#galleriesControllerGetOne) | **POST** /wiki/galleries/getOne | 
[**galleriesControllerUpdate**](GalleriesApi.md#galleriesControllerUpdate) | **PUT** /galleries/admin | 
[**galleriesControllerUploadFile**](GalleriesApi.md#galleriesControllerUploadFile) | **POST** /galleries/admin/upload | 


# **galleriesControllerCreate**
> Gallery galleriesControllerCreate(GalleriesControllerCreateRequest)


### Example


```typescript
import { createConfiguration, GalleriesApi } from '';
import type { GalleriesApiGalleriesControllerCreateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new GalleriesApi(configuration);

const request: GalleriesApiGalleriesControllerCreateRequest = {
  
  GalleriesControllerCreateRequest: {
    url: "url_example",
    alt: "alt_example",
    key: "key_example",
    character: "character_example",
  },
};

const data = await apiInstance.galleriesControllerCreate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **GalleriesControllerCreateRequest** | **GalleriesControllerCreateRequest**|  |


### Return type

**Gallery**

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

# **galleriesControllerDelete**
> void galleriesControllerDelete()


### Example


```typescript
import { createConfiguration, GalleriesApi } from '';
import type { GalleriesApiGalleriesControllerDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new GalleriesApi(configuration);

const request: GalleriesApiGalleriesControllerDeleteRequest = {
  
  id: "id_example",
};

const data = await apiInstance.galleriesControllerDelete(request);
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

# **galleriesControllerGet**
> Array<Gallery> galleriesControllerGet(GalleriesControllerGetRequest)


### Example


```typescript
import { createConfiguration, GalleriesApi } from '';
import type { GalleriesApiGalleriesControllerGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new GalleriesApi(configuration);

const request: GalleriesApiGalleriesControllerGetRequest = {
  
  GalleriesControllerGetRequest: {
    id: "id_example",
    alt: "alt_example",
    url: "url_example",
    take: "10",
    skip: "0",
  },
};

const data = await apiInstance.galleriesControllerGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **GalleriesControllerGetRequest** | **GalleriesControllerGetRequest**|  |


### Return type

**Array<Gallery>**

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

# **galleriesControllerGetAll**
> Array<Gallery> galleriesControllerGetAll()


### Example


```typescript
import { createConfiguration, GalleriesApi } from '';

const configuration = createConfiguration();
const apiInstance = new GalleriesApi(configuration);

const request = {};

const data = await apiInstance.galleriesControllerGetAll(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<Gallery>**

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

# **galleriesControllerGetOne**
> Gallery galleriesControllerGetOne(GalleriesControllerGetRequest)


### Example


```typescript
import { createConfiguration, GalleriesApi } from '';
import type { GalleriesApiGalleriesControllerGetOneRequest } from '';

const configuration = createConfiguration();
const apiInstance = new GalleriesApi(configuration);

const request: GalleriesApiGalleriesControllerGetOneRequest = {
  
  GalleriesControllerGetRequest: {
    id: "id_example",
    alt: "alt_example",
    url: "url_example",
    take: "10",
    skip: "0",
  },
};

const data = await apiInstance.galleriesControllerGetOne(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **GalleriesControllerGetRequest** | **GalleriesControllerGetRequest**|  |


### Return type

**Gallery**

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

# **galleriesControllerUpdate**
> void galleriesControllerUpdate(GalleriesControllerUpdateRequest)


### Example


```typescript
import { createConfiguration, GalleriesApi } from '';
import type { GalleriesApiGalleriesControllerUpdateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new GalleriesApi(configuration);

const request: GalleriesApiGalleriesControllerUpdateRequest = {
  
  GalleriesControllerUpdateRequest: {
    id: "id_example",
    url: "url_example",
    alt: "alt_example",
    key: "key_example",
    character: "character_example",
  },
};

const data = await apiInstance.galleriesControllerUpdate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **GalleriesControllerUpdateRequest** | **GalleriesControllerUpdateRequest**|  |


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

# **galleriesControllerUploadFile**
> void galleriesControllerUploadFile()


### Example


```typescript
import { createConfiguration, GalleriesApi } from '';
import type { GalleriesApiGalleriesControllerUploadFileRequest } from '';

const configuration = createConfiguration();
const apiInstance = new GalleriesApi(configuration);

const request: GalleriesApiGalleriesControllerUploadFileRequest = {
  
  comment: "comment_example",
  
  outletId: 1,
  
  file: { data: Buffer.from(fs.readFileSync('/path/to/file', 'utf-8')), name: '/path/to/file' },
};

const data = await apiInstance.galleriesControllerUploadFile(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **comment** | [**string**] |  | (optional) defaults to undefined
 **outletId** | [**number**] |  | (optional) defaults to undefined
 **file** | [**HttpFile**] |  | (optional) defaults to undefined


### Return type

**void**

### Authorization

[bearer](README.md#bearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


