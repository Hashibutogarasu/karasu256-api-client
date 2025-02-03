# .CharactersApi

All URIs are relative to *https://api.karasu256.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**charactersControllerCreate**](CharactersApi.md#charactersControllerCreate) | **POST** /wiki/genshin/characters | 
[**charactersControllerDelete**](CharactersApi.md#charactersControllerDelete) | **DELETE** /wiki/genshin/characters/{id} | 
[**charactersControllerGet**](CharactersApi.md#charactersControllerGet) | **GET** /wiki/genshin/characters | 
[**charactersControllerGetOne**](CharactersApi.md#charactersControllerGetOne) | **GET** /wiki/genshin/characters/getOne | 
[**charactersControllerImport**](CharactersApi.md#charactersControllerImport) | **POST** /wiki/genshin/characters/import | 
[**charactersControllerImportFromHoyoLab**](CharactersApi.md#charactersControllerImportFromHoyoLab) | **POST** /wiki/genshin/characters/importFromHoyoLab | 
[**charactersControllerUpdate**](CharactersApi.md#charactersControllerUpdate) | **PUT** /wiki/genshin/characters | 


# **charactersControllerCreate**
> Character charactersControllerCreate(charactersControllerCreateRequest)


### Example


```typescript
import { createConfiguration, CharactersApi } from '';
import type { CharactersApiCharactersControllerCreateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CharactersApi(configuration);

const request: CharactersApiCharactersControllerCreateRequest = {
  
  charactersControllerCreateRequest: {
    name: "name_example",
    description: "description_example",
    iconUrl: "iconUrl_example",
    element: "element_example",
    country: "country_example",
    weapon: "weapon_example",
    headerImgUrl: "headerImgUrl_example",
    artifactSet: [
      "artifactSet_example",
    ],
    weaponType: "weaponType_example",
    rarity: 3.14,
    version: "1.0",
    unimplemented: false,
  },
};

const data = await apiInstance.charactersControllerCreate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **charactersControllerCreateRequest** | **CharactersControllerCreateRequest**|  |


### Return type

**Character**

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

# **charactersControllerDelete**
> void charactersControllerDelete()


### Example


```typescript
import { createConfiguration, CharactersApi } from '';
import type { CharactersApiCharactersControllerDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CharactersApi(configuration);

const request: CharactersApiCharactersControllerDeleteRequest = {
  
  id: "id_example",
};

const data = await apiInstance.charactersControllerDelete(request);
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

# **charactersControllerGet**
> Array<Character> charactersControllerGet()


### Example


```typescript
import { createConfiguration, CharactersApi } from '';
import type { CharactersApiCharactersControllerGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CharactersApi(configuration);

const request: CharactersApiCharactersControllerGetRequest = {
  
  query: {
    id: "id_example",
    createdAt: new Date('1970-01-01T00:00:00.00Z'),
    updatedAt: new Date('1970-01-01T00:00:00.00Z'),
    name: "name_example",
    description: "description_example",
    iconUrl: "iconUrl_example",
    element: "element_example",
    country: "country_example",
    weapon: "weapon_example",
    headerImgUrl: "headerImgUrl_example",
    rarity: 3.14,
    version: "version_example",
    unimplemented: "unimplemented_example",
  },
};

const data = await apiInstance.charactersControllerGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **CharactersControllerGetQueryParameter** |  | defaults to undefined


### Return type

**Array<Character>**

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

# **charactersControllerGetOne**
> Character charactersControllerGetOne()


### Example


```typescript
import { createConfiguration, CharactersApi } from '';
import type { CharactersApiCharactersControllerGetOneRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CharactersApi(configuration);

const request: CharactersApiCharactersControllerGetOneRequest = {
  
  query: {
    id: "id_example",
    createdAt: new Date('1970-01-01T00:00:00.00Z'),
    updatedAt: new Date('1970-01-01T00:00:00.00Z'),
    name: "name_example",
    description: "description_example",
    iconUrl: "iconUrl_example",
    element: "element_example",
    country: "country_example",
    weapon: "weapon_example",
    headerImgUrl: "headerImgUrl_example",
    rarity: 3.14,
    version: "version_example",
    unimplemented: "unimplemented_example",
  },
};

const data = await apiInstance.charactersControllerGetOne(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **CharactersControllerGetQueryParameter** |  | defaults to undefined


### Return type

**Character**

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

# **charactersControllerImport**
> Character charactersControllerImport(charactersControllerImportRequest)


### Example


```typescript
import { createConfiguration, CharactersApi } from '';
import type { CharactersApiCharactersControllerImportRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CharactersApi(configuration);

const request: CharactersApiCharactersControllerImportRequest = {
  
  charactersControllerImportRequest: {
    id: "id_example",
    name: "name_example",
    desc: "desc_example",
    iconUrl: "iconUrl_example",
    headerImgUrl: "headerImgUrl_example",
    modules: [
      {
        name: "name_example",
        isPosed: false,
        components: [
          {
            componentId: "componentId_example",
            layout: "layout_example",
            data: "data_example",
            style: "style_example",
          },
        ],
        id: "id_example",
        isCustomizeName: false,
        isAbstract: false,
        isShowSwitch: false,
        _switch: false,
        desc: "desc_example",
        repeated: false,
        isSubmodule: false,
        originModuleId: "originModuleId_example",
        withoutBorder: false,
        canDelete: false,
        isHidden: false,
        richTextEditing: false,
      },
    ],
    filterValues: {
      characterProperty: {
        values: [],
        valueTypes: [
          {
            id: "id_example",
            value: "value_example",
            mi18nKey: "mi18nKey_example",
            icon: "icon_example",
            iconUrl: "iconUrl_example",
            enumString: "enumString_example",
          },
        ],
        key: {
          key: "key_example",
          text: "text_example",
          values: [],
          mi18nKey: "mi18nKey_example",
          isMultiSelect: false,
          id: "id_example",
          isHidden: false,
          updatedAt: "updatedAt_example",
        },
      },
      characterWeapon: {
        values: [],
        valueTypes: [
          {
            id: "id_example",
            value: "value_example",
            mi18nKey: "mi18nKey_example",
            icon: "icon_example",
            iconUrl: "iconUrl_example",
            enumString: "enumString_example",
          },
        ],
        key: {
          key: "key_example",
          text: "text_example",
          values: [],
          mi18nKey: "mi18nKey_example",
          isMultiSelect: false,
          id: "id_example",
          isHidden: false,
          updatedAt: "updatedAt_example",
        },
      },
      characterRarity: {
        values: [],
        valueTypes: [
          {
            id: "id_example",
            value: "value_example",
            mi18nKey: "mi18nKey_example",
            icon: "icon_example",
            iconUrl: "iconUrl_example",
            enumString: "enumString_example",
          },
        ],
        key: {
          key: "key_example",
          text: "text_example",
          values: [],
          mi18nKey: "mi18nKey_example",
          isMultiSelect: false,
          id: "id_example",
          isHidden: false,
          updatedAt: "updatedAt_example",
        },
      },
      characterVision: {
        values: [],
        valueTypes: [
          {
            id: "id_example",
            value: "value_example",
            mi18nKey: "mi18nKey_example",
            icon: "icon_example",
            iconUrl: "iconUrl_example",
            enumString: "enumString_example",
          },
        ],
        key: {
          key: "key_example",
          text: "text_example",
          values: [],
          mi18nKey: "mi18nKey_example",
          isMultiSelect: false,
          id: "id_example",
          isHidden: false,
          updatedAt: "updatedAt_example",
        },
      },
      characterRegion: {
        values: [],
        valueTypes: [
          {
            id: "id_example",
            value: "value_example",
            mi18nKey: "mi18nKey_example",
            icon: "icon_example",
            iconUrl: "iconUrl_example",
            enumString: "enumString_example",
          },
        ],
        key: {
          key: "key_example",
          text: "text_example",
          values: [],
          mi18nKey: "mi18nKey_example",
          isMultiSelect: false,
          id: "id_example",
          isHidden: false,
          updatedAt: "updatedAt_example",
        },
      },
    },
    menuId: "menuId_example",
    menuName: "menuName_example",
    version: "version_example",
    langs: [],
    templateLayout: null,
    editLockStatus: "editLockStatus_example",
    correctLockStatus: "correctLockStatus_example",
    templateId: "templateId_example",
    ext: {
      feExt: "feExt_example",
      postExt: {
        postId: "postId_example",
        postUserName: "postUserName_example",
        postTime: "postTime_example",
        postAvaterUrl: "postAvaterUrl_example",
        url: "url_example",
      },
      serverExt: "serverExt_example",
      personalizedColor: "personalizedColor_example",
      scrollingText: "scrollingText_example",
      cornerMark: "cornerMark_example",
    },
    aliasName: "aliasName_example",
    lang: "lang_example",
    beta: false,
    pageType: "pageType_example",
    menuStyle: "menuStyle_example",
  },
};

const data = await apiInstance.charactersControllerImport(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **charactersControllerImportRequest** | **CharactersControllerImportRequest**|  |


### Return type

**Character**

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

# **charactersControllerImportFromHoyoLab**
> Character charactersControllerImportFromHoyoLab()


### Example


```typescript
import { createConfiguration, CharactersApi } from '';
import type { CharactersApiCharactersControllerImportFromHoyoLabRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CharactersApi(configuration);

const request: CharactersApiCharactersControllerImportFromHoyoLabRequest = {
  
  query: {
    entryPageId: "entryPageId_example",
  },
};

const data = await apiInstance.charactersControllerImportFromHoyoLab(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **CharactersControllerImportFromHoyoLabQueryParameter** |  | defaults to undefined


### Return type

**Character**

### Authorization

[bearer](README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **charactersControllerUpdate**
> void charactersControllerUpdate(charactersControllerUpdateRequest)


### Example


```typescript
import { createConfiguration, CharactersApi } from '';
import type { CharactersApiCharactersControllerUpdateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CharactersApi(configuration);

const request: CharactersApiCharactersControllerUpdateRequest = {
  
  charactersControllerUpdateRequest: {
    id: "id_example",
    name: "name_example",
    description: "description_example",
    iconUrl: "iconUrl_example",
    headerImgUrl: "headerImgUrl_example",
    element: "element_example",
    country: "country_example",
    weaponType: "weaponType_example",
    rarity: 3.14,
    version: "1.0",
    unimplemented: true,
  },
};

const data = await apiInstance.charactersControllerUpdate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **charactersControllerUpdateRequest** | **CharactersControllerUpdateRequest**|  |


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


