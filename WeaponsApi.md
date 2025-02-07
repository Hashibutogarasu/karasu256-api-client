# .WeaponsApi

All URIs are relative to *https://api.karasu256.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**weaponsControllerGet**](WeaponsApi.md#weaponsControllerGet) | **POST** /wiki/genshin/weapons/get | 
[**weaponsControllerGetAll**](WeaponsApi.md#weaponsControllerGetAll) | **GET** /wiki/genshin/weapons | 
[**weaponsControllerGetOne**](WeaponsApi.md#weaponsControllerGetOne) | **POST** /wiki/genshin/weapons/getOne | 


# **weaponsControllerGet**
> Array<Weapon> weaponsControllerGet(WeaponsControllerGetRequest)


### Example


```typescript
import { createConfiguration, WeaponsApi } from '';
import type { WeaponsApiWeaponsControllerGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new WeaponsApi(configuration);

const request: WeaponsApiWeaponsControllerGetRequest = {
  
  WeaponsControllerGetRequest: {
    id: "id_example",
    take: "10",
    skip: "0",
    name: "name_example",
    description: "description_example",
    icon_url: "icon_url_example",
    type: "type_example",
    rarity: 3.14,
    effect: "effect_example",
    version: "version_example",
  },
};

const data = await apiInstance.weaponsControllerGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **WeaponsControllerGetRequest** | **WeaponsControllerGetRequest**|  |


### Return type

**Array<Weapon>**

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

# **weaponsControllerGetAll**
> Array<Weapon> weaponsControllerGetAll()


### Example


```typescript
import { createConfiguration, WeaponsApi } from '';

const configuration = createConfiguration();
const apiInstance = new WeaponsApi(configuration);

const request = {};

const data = await apiInstance.weaponsControllerGetAll(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<Weapon>**

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

# **weaponsControllerGetOne**
> Weapon weaponsControllerGetOne(WeaponsControllerGetRequest)


### Example


```typescript
import { createConfiguration, WeaponsApi } from '';
import type { WeaponsApiWeaponsControllerGetOneRequest } from '';

const configuration = createConfiguration();
const apiInstance = new WeaponsApi(configuration);

const request: WeaponsApiWeaponsControllerGetOneRequest = {
  
  WeaponsControllerGetRequest: {
    id: "id_example",
    take: "10",
    skip: "0",
    name: "name_example",
    description: "description_example",
    icon_url: "icon_url_example",
    type: "type_example",
    rarity: 3.14,
    effect: "effect_example",
    version: "version_example",
  },
};

const data = await apiInstance.weaponsControllerGetOne(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **WeaponsControllerGetRequest** | **WeaponsControllerGetRequest**|  |


### Return type

**Weapon**

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


