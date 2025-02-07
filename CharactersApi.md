# .CharactersApi

All URIs are relative to *https://api.karasu256.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**charactersControllerGet**](CharactersApi.md#charactersControllerGet) | **POST** /wiki/genshin/characters/get | 
[**charactersControllerGetAll**](CharactersApi.md#charactersControllerGetAll) | **GET** /wiki/genshin/characters | 
[**charactersControllerGetOne**](CharactersApi.md#charactersControllerGetOne) | **POST** /wiki/genshin/characters/getOne | 


# **charactersControllerGet**
> Array<GICharacter> charactersControllerGet(CharactersControllerGetRequest)


### Example


```typescript
import { createConfiguration, CharactersApi } from '';
import type { CharactersApiCharactersControllerGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CharactersApi(configuration);

const request: CharactersApiCharactersControllerGetRequest = {
  
  CharactersControllerGetRequest: {
    id: "id_example",
    take: "10",
    skip: "0",
    name: "name_example",
    description: "description_example",
    icon_url: "icon_url_example",
    element: "element_example",
    region: "region_example",
    weapon: "weapon_example",
    header_img_url: "header_img_url_example",
    rarity: 3.14,
    version: "version_example",
    property: "property_example",
    unimplemented: "unimplemented_example",
  },
};

const data = await apiInstance.charactersControllerGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **CharactersControllerGetRequest** | **CharactersControllerGetRequest**|  |


### Return type

**Array<GICharacter>**

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

# **charactersControllerGetAll**
> Array<GICharacter> charactersControllerGetAll()


### Example


```typescript
import { createConfiguration, CharactersApi } from '';

const configuration = createConfiguration();
const apiInstance = new CharactersApi(configuration);

const request = {};

const data = await apiInstance.charactersControllerGetAll(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<GICharacter>**

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

# **charactersControllerGetOne**
> GICharacter charactersControllerGetOne(CharactersControllerGetRequest)


### Example


```typescript
import { createConfiguration, CharactersApi } from '';
import type { CharactersApiCharactersControllerGetOneRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CharactersApi(configuration);

const request: CharactersApiCharactersControllerGetOneRequest = {
  
  CharactersControllerGetRequest: {
    id: "id_example",
    take: "10",
    skip: "0",
    name: "name_example",
    description: "description_example",
    icon_url: "icon_url_example",
    element: "element_example",
    region: "region_example",
    weapon: "weapon_example",
    header_img_url: "header_img_url_example",
    rarity: 3.14,
    version: "version_example",
    property: "property_example",
    unimplemented: "unimplemented_example",
  },
};

const data = await apiInstance.charactersControllerGetOne(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **CharactersControllerGetRequest** | **CharactersControllerGetRequest**|  |


### Return type

**GICharacter**

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


