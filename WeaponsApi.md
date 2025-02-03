# .WeaponsApi

All URIs are relative to *https://api.karasu256.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**weaponsControllerCreate**](WeaponsApi.md#weaponsControllerCreate) | **POST** /wiki/genshin/weapons | 
[**weaponsControllerDelete**](WeaponsApi.md#weaponsControllerDelete) | **DELETE** /wiki/genshin/weapons/{id} | 
[**weaponsControllerGet**](WeaponsApi.md#weaponsControllerGet) | **GET** /wiki/genshin/weapons | 
[**weaponsControllerGetOne**](WeaponsApi.md#weaponsControllerGetOne) | **GET** /wiki/genshin/weapons/getOne | 
[**weaponsControllerUpdate**](WeaponsApi.md#weaponsControllerUpdate) | **PUT** /wiki/genshin/weapons | 


# **weaponsControllerCreate**
> Weapon weaponsControllerCreate(weaponsControllerCreateRequest)


### Example


```typescript
import { createConfiguration, WeaponsApi } from '';
import type { WeaponsApiWeaponsControllerCreateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new WeaponsApi(configuration);

const request: WeaponsApiWeaponsControllerCreateRequest = {
  
  weaponsControllerCreateRequest: {
    name: "name_example",
    description: "description_example",
    iconUrl: "iconUrl_example",
    type: "type_example",
    rarity: 3.14,
    effect: "effect_example",
    version: "1.0",
  },
};

const data = await apiInstance.weaponsControllerCreate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **weaponsControllerCreateRequest** | **WeaponsControllerCreateRequest**|  |


### Return type

**Weapon**

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

# **weaponsControllerDelete**
> void weaponsControllerDelete()


### Example


```typescript
import { createConfiguration, WeaponsApi } from '';
import type { WeaponsApiWeaponsControllerDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new WeaponsApi(configuration);

const request: WeaponsApiWeaponsControllerDeleteRequest = {
  
  id: "id_example",
};

const data = await apiInstance.weaponsControllerDelete(request);
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

# **weaponsControllerGet**
> Array<Weapon> weaponsControllerGet()


### Example


```typescript
import { createConfiguration, WeaponsApi } from '';
import type { WeaponsApiWeaponsControllerGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new WeaponsApi(configuration);

const request: WeaponsApiWeaponsControllerGetRequest = {
  
  query: {
    id: "id_example",
    createdAt: null,
    updatedAt: null,
    name: "name_example",
    description: "description_example",
    iconUrl: "iconUrl_example",
    type: "type_example",
    rarity: 3.14,
    effect: "effect_example",
    version: "1.0",
  },
};

const data = await apiInstance.weaponsControllerGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **WeaponsControllerGetQueryParameter** |  | defaults to undefined


### Return type

**Array<Weapon>**

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

# **weaponsControllerGetOne**
> Weapon weaponsControllerGetOne()


### Example


```typescript
import { createConfiguration, WeaponsApi } from '';
import type { WeaponsApiWeaponsControllerGetOneRequest } from '';

const configuration = createConfiguration();
const apiInstance = new WeaponsApi(configuration);

const request: WeaponsApiWeaponsControllerGetOneRequest = {
  
  query: {
    id: "id_example",
    createdAt: null,
    updatedAt: null,
    name: "name_example",
    description: "description_example",
    iconUrl: "iconUrl_example",
    type: "type_example",
    rarity: 3.14,
    effect: "effect_example",
    version: "1.0",
  },
};

const data = await apiInstance.weaponsControllerGetOne(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **WeaponsControllerGetQueryParameter** |  | defaults to undefined


### Return type

**Weapon**

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

# **weaponsControllerUpdate**
> void weaponsControllerUpdate(weaponsControllerUpdateRequest)


### Example


```typescript
import { createConfiguration, WeaponsApi } from '';
import type { WeaponsApiWeaponsControllerUpdateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new WeaponsApi(configuration);

const request: WeaponsApiWeaponsControllerUpdateRequest = {
  
  weaponsControllerUpdateRequest: {
    id: "id_example",
    name: "name_example",
    description: "description_example",
    iconUrl: "iconUrl_example",
    type: "type_example",
    rarity: 3.14,
    effect: "effect_example",
    version: "1.0",
  },
};

const data = await apiInstance.weaponsControllerUpdate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **weaponsControllerUpdateRequest** | **WeaponsControllerUpdateRequest**|  |


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


