# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [1.5.0](https://github.com/ecomplus/app-custom-payment/compare/v1.4.2...v1.5.0) (2024-01-01)


### Features

* **list-payments:** option to disable discount on carts with promotional items ([#103](https://github.com/ecomplus/app-custom-payment/issues/103)) ([a2c6272](https://github.com/ecomplus/app-custom-payment/commit/a2c6272ba64a1163a1e8c64326b025413628e994))


### Bug Fixes

* **deps:** update @ecomplus/application-sdk to v1.15.5 firestore ([5ba561a](https://github.com/ecomplus/app-custom-payment/commit/5ba561a4dc6b571abd402f88a48c87cb7ebd1847))
* **deps:** update all non-major dependencies ([129731c](https://github.com/ecomplus/app-custom-payment/commit/129731caa4b60b7f9b00f213dc20a58a460501ca))
* set transaction status paid by default for zero amount ([a9e89e1](https://github.com/ecomplus/app-custom-payment/commit/a9e89e1e3178856ec683442abc955fd1fbd4e59a))

### [1.4.2](https://github.com/ecomplus/application-starter/compare/v1.4.1...v1.4.2) (2021-03-12)


### Bug Fixes

* **create-transaction:** prevent undefined `paymentOption` when no method name set ([e3428ee](https://github.com/ecomplus/application-starter/commit/e3428ee4e21f578504eca8c62d888e73e354aea4))
* **deps:** update all non-major dependencies ([#39](https://github.com/ecomplus/application-starter/issues/39)) ([f9b65fe](https://github.com/ecomplus/application-starter/commit/f9b65fed589744c942f436fffeabf78d1a89025f))

### [1.4.1](https://github.com/ecomplus/application-starter/compare/v1.4.0...v1.4.1) (2021-02-14)


### Bug Fixes

* **deps:** update all non-major dependencies ([#35](https://github.com/ecomplus/application-starter/issues/35)) ([e95ca30](https://github.com/ecomplus/application-starter/commit/e95ca30305c9aa719d6016aca44486ddf89e8641))
* **list-payments:** set configured  on  object ([4c5a10f](https://github.com/ecomplus/application-starter/commit/4c5a10f26109a1752638c16cd1d896b72a553d20))

## [1.4.0](https://github.com/ecomplus/application-starter/compare/v1.3.1...v1.4.0) (2021-02-05)


### Features

* **create-transaction:** handle configured payment link and redirect to payment ([cffc072](https://github.com/ecomplus/application-starter/commit/cffc072a490b052ce825f78b4bdde38d01875f98))
* **ecom-config:** add `payment_link` field to admin settings payment option schema ([b4164f6](https://github.com/ecomplus/application-starter/commit/b4164f6c86ab9f1ab8784d042d484413639839b6))


### Bug Fixes

* **ecom-config:** unset app authentication ([ba57513](https://github.com/ecomplus/application-starter/commit/ba575134ab378e42e0042f171b0542f1a6d4e912))
* **list-payments:** prevent error with undefined `paymentOption.payment_method` ([487f16a](https://github.com/ecomplus/application-starter/commit/487f16adecebf89437d178c433276b0263df3e1a))

### [1.3.1](https://github.com/ecomplus/application-starter/compare/v1.3.0...v1.3.1) (2020-12-17)


### Bug Fixes

* **deps:** update all non-major dependencies ([#27](https://github.com/ecomplus/application-starter/issues/27)) ([b94339e](https://github.com/ecomplus/application-starter/commit/b94339ed15b2cadfcde1871918bd1c872c288f2c))
* **deps:** update all non-major dependencies ([#31](https://github.com/ecomplus/application-starter/issues/31)) ([ca86478](https://github.com/ecomplus/application-starter/commit/ca86478a36be26d1efc55242ff17dc6fe0d25aef))
* **list-payments:** dont check cumulative discount when 'amount.discount' undefined ([#32](https://github.com/ecomplus/application-starter/issues/32)) ([eb99d1f](https://github.com/ecomplus/application-starter/commit/eb99d1ffb2117af17849d3a24ab58cade257e9fc))

## [1.3.0](https://github.com/ecomplus/application-starter/compare/v1.0.1...v1.3.0) (2020-12-11)


### Features

* **admin-settings:** add 'zip_range' to payment options config ([7967f9d](https://github.com/ecomplus/application-starter/commit/7967f9d30151984b78f2080a1680d2e20bf06671))
* **discount:** add option for non-cumulative discount ([#20](https://github.com/ecomplus/application-starter/issues/20)) ([cf4a92e](https://github.com/ecomplus/application-starter/commit/cf4a92e7c650dcff6a1d37c5a225ccada8a29aaf))
* **list-payment:** optionally handling address specific payment option ([3fa172e](https://github.com/ecomplus/application-starter/commit/3fa172e042e93c17c09fb7aaeb966376be8bf6b5))


### Bug Fixes

* **apply-discounts:** fix setting discount option and checking cumulative ([#19](https://github.com/ecomplus/application-starter/issues/19)) ([ee9b7b6](https://github.com/ecomplus/application-starter/commit/ee9b7b63b8352619d2cd5d4dce85981209c3e1ab))
* **deps:** update @ecomplus/application-sdk and firebase-admin major ([f46590f](https://github.com/ecomplus/application-starter/commit/f46590fca10a02869bfdb3e7e6a03604ec2a665e))
* **deps:** update @ecomplus/application-sdk firestore verison ([1c2d4ee](https://github.com/ecomplus/application-starter/commit/1c2d4ee570fd34289647d78880439dfbfcca07e8))
* **deps:** update all non-major dependencies ([#10](https://github.com/ecomplus/application-starter/issues/10)) ([2954b8a](https://github.com/ecomplus/application-starter/commit/2954b8aad62983e60359776aace955154cb07ac6))
* **deps:** update all non-major dependencies ([#23](https://github.com/ecomplus/application-starter/issues/23)) ([ad757cf](https://github.com/ecomplus/application-starter/commit/ad757cff78b250559f65535f8bc91d4505565f27))
* **list-payments:** fix pushing payment gateway objects ([466db39](https://github.com/ecomplus/application-starter/commit/466db398de068145896ffdefd0dc1764d3b18b5d))
* **list-payments:** payment method label for default discount option ([e7084db](https://github.com/ecomplus/application-starter/commit/e7084db854eb6bcb7195b3b09581b2d4e52d3869))
* **list-payments:** relaxing zip condition filter ([8d837fd](https://github.com/ecomplus/application-starter/commit/8d837fd87bfac444445633700f515d9e6e6ecd1f))
* **list-payments.js:** check if the discount is greater than 0 ([07696b4](https://github.com/ecomplus/application-starter/commit/07696b4055949d5471059e6eef03b661366e2ffa))
* **refresh-tokens:** add scheduled cloud function to run update ([322f882](https://github.com/ecomplus/application-starter/commit/322f882a13639346fbace66ebb3c465de9d8025d))
* **setup:** do not disable updates on refresh-tokens route ([a388827](https://github.com/ecomplus/application-starter/commit/a3888273958ae09136f2af9923be5f6771c6f9e8))
* cumulative_discount, amount.discount ([2d74ece](https://github.com/ecomplus/application-starter/commit/2d74ece737308d0380c56e686e0d28463af65ee2))
* description text ([d5fd4f9](https://github.com/ecomplus/application-starter/commit/d5fd4f9f31f5c3164d83267256296ec98db392d3))

### [1.2.1](https://github.com/ecomplus/application-starter/compare/v1.2.0...v1.2.1) (2020-11-05)


### Bug Fixes

* **deps:** update all non-major dependencies ([#23](https://github.com/ecomplus/application-starter/issues/23)) ([ad757cf](https://github.com/ecomplus/application-starter/commit/ad757cff78b250559f65535f8bc91d4505565f27))
* **refresh-tokens:** add scheduled cloud function to run update ([322f882](https://github.com/ecomplus/application-starter/commit/322f882a13639346fbace66ebb3c465de9d8025d))

## [1.2.0](https://github.com/ecomplus/application-starter/compare/v1.1.1...v1.2.0) (2020-09-11)


### Features

* **discount:** add option for non-cumulative discount ([#20](https://github.com/ecomplus/application-starter/issues/20)) ([cf4a92e](https://github.com/ecomplus/application-starter/commit/cf4a92e7c650dcff6a1d37c5a225ccada8a29aaf))


### Bug Fixes

* **apply-discounts:** fix setting discount option and checking cumulative ([#19](https://github.com/ecomplus/application-starter/issues/19)) ([ee9b7b6](https://github.com/ecomplus/application-starter/commit/ee9b7b63b8352619d2cd5d4dce85981209c3e1ab))
* **deps:** update @ecomplus/application-sdk and firebase-admin major ([f46590f](https://github.com/ecomplus/application-starter/commit/f46590fca10a02869bfdb3e7e6a03604ec2a665e))
* **deps:** update @ecomplus/application-sdk firestore verison ([1c2d4ee](https://github.com/ecomplus/application-starter/commit/1c2d4ee570fd34289647d78880439dfbfcca07e8))
* **list-payments:** fix pushing payment gateway objects ([466db39](https://github.com/ecomplus/application-starter/commit/466db398de068145896ffdefd0dc1764d3b18b5d))
* **list-payments:** payment method label for default discount option ([e7084db](https://github.com/ecomplus/application-starter/commit/e7084db854eb6bcb7195b3b09581b2d4e52d3869))
* description text ([d5fd4f9](https://github.com/ecomplus/application-starter/commit/d5fd4f9f31f5c3164d83267256296ec98db392d3))

### [1.1.1](https://github.com/ecomplus/application-starter/compare/v1.1.0...v1.1.1) (2020-05-28)


### Bug Fixes

* **list-payments:** relaxing zip condition filter ([8d837fd](https://github.com/ecomplus/application-starter/commit/8d837fd87bfac444445633700f515d9e6e6ecd1f))

## [1.1.0](https://github.com/ecomplus/application-starter/compare/v1.0.1...v1.1.0) (2020-05-28)


### Features

* **admin-settings:** add 'zip_range' to payment options config ([7967f9d](https://github.com/ecomplus/application-starter/commit/7967f9d30151984b78f2080a1680d2e20bf06671))
* **list-payment:** optionally handling address specific payment option ([3fa172e](https://github.com/ecomplus/application-starter/commit/3fa172e042e93c17c09fb7aaeb966376be8bf6b5))


### Bug Fixes

* **deps:** update all non-major dependencies ([#10](https://github.com/ecomplus/application-starter/issues/10)) ([2954b8a](https://github.com/ecomplus/application-starter/commit/2954b8aad62983e60359776aace955154cb07ac6))
* **setup:** do not disable updates on refresh-tokens route ([a388827](https://github.com/ecomplus/application-starter/commit/a3888273958ae09136f2af9923be5f6771c6f9e8))

### [1.0.1](https://github.com/ecomplus/application-starter/compare/v1.0.0...v1.0.1) (2020-04-24)


### Bug Fixes

* **deps:** update all non-major dependencies ([#9](https://github.com/ecomplus/application-starter/issues/9)) ([a3ecad9](https://github.com/ecomplus/application-starter/commit/a3ecad95404117145d8c8822349f9d859f3fe935))

## 1.0.0 (2020-04-07)


### Features

* **create-transaction:** handle transaction ([cc08892](https://github.com/ecomplus/application-starter/commit/cc088928ebd324a83e8300c0f42e503119177074))
* **list-payments:** returning available payment methods ([5ce7ba2](https://github.com/ecomplus/application-starter/commit/5ce7ba26c87b7b74523d6b29434bdee325b2e3c3))


### Bug Fixes

* **deps:** update all non-major dependencies ([#2](https://github.com/ecomplus/application-starter/issues/2)) ([edc0209](https://github.com/ecomplus/application-starter/commit/edc02098e3e11f558be333d4cc17fa604e206ae0))
* **deps:** update all non-major dependencies ([#3](https://github.com/ecomplus/application-starter/issues/3)) ([88dde44](https://github.com/ecomplus/application-starter/commit/88dde44da747bd12d2086f27edd6470de0ace09c))
* replacing dashes with underline in module names ([f003fe3](https://github.com/ecomplus/application-starter/commit/f003fe369df2ea503c595314eaa59e02ec877312))
* **deps:** update dependency firebase-tools to v8 ([#5](https://github.com/ecomplus/application-starter/issues/5)) ([249e82b](https://github.com/ecomplus/application-starter/commit/249e82b4a07d660e90a1b7b77d5cfbd0cbe3755f))

## [1.0.0-starter.5](https://github.com/ecomplus/application-starter/compare/v1.0.0-starter.4...v1.0.0-starter.5) (2020-03-05)


### Features

* **market-publication:** handle full featured app publication to Market ([28379dc](https://github.com/ecomplus/application-starter/commit/28379dc3c4784e757c8f25e5d737f6143682b0db))
* **static:** handle static with server app files from public folder ([827d000](https://github.com/ecomplus/application-starter/commit/827d00079b0dc169b2eef31b8e0ac73c596307a8))

## [1.0.0-starter.4](https://github.com/ecomplus/application-starter/compare/v1.0.0-starter.3...v1.0.0-starter.4) (2020-02-21)


### Features

* **calculate-shipping:** basic setup for calculate shipping module ([db77595](https://github.com/ecomplus/application-starter/commit/db7759514bb25d151dd4508fb96b84c52b3e94ba))


### Bug Fixes

* **home:** fix replace accets regex exps to generate slug from title ([198cc0b](https://github.com/ecomplus/application-starter/commit/198cc0b911d4874d96f3cd5254d30cab5fe89765))
* **home:** gen slug from pkg name or app title if not set or default ([25c20bf](https://github.com/ecomplus/application-starter/commit/25c20bfade65a86e4f4b1026ef59a5694a022a74))

## [1.0.0-starter.3](https://github.com/ecomplus/application-starter/compare/v1.0.0-starter.2...v1.0.0-starter.3) (2020-02-21)

## [1.0.0-starter.2](https://github.com/ecomplus/application-starter/compare/v1.0.0-starter.1...v1.0.0-starter.2) (2020-02-21)


### Bug Fixes

* **config:** stop reading app from functions config ([7b9aab7](https://github.com/ecomplus/application-starter/commit/7b9aab727fefe8a5b84695e90a0d68e02b8c3f62))

## [1.0.0-starter.1](https://github.com/ecomplus/application-starter/compare/v1.0.0-starter.0...v1.0.0-starter.1) (2020-02-20)


### Features

* **get-auth:** endpoint to return auth id and token for external usage ([40a8ae2](https://github.com/ecomplus/application-starter/commit/40a8ae2e895d6e32c7032ca500040ec82c80dc5d))
* **server:** also supporting passing Store Id from query ([111f3a7](https://github.com/ecomplus/application-starter/commit/111f3a716fbfd2e155e3fb24242bddcae7cb065c))


### Bug Fixes

* **server:** remove 'routes' path when setting filename for routes ([119524c](https://github.com/ecomplus/application-starter/commit/119524c523a11364ed912769637a6f8e479af5f1))

## [1.0.0-starter.0](https://github.com/ecomplus/application-starter/compare/v0.1.1...v1.0.0-starter.0) (2020-02-18)


### Features

* **router:** recursive read routes dir to auto setup server routes ([ff2b456](https://github.com/ecomplus/application-starter/commit/ff2b45604723a8146c9481ea36a9400da5ccc2bc))


### Bug Fixes

* **home:** fix semver on for app.version (remove version tag if any) ([ad36461](https://github.com/ecomplus/application-starter/commit/ad364614a7f5599850ad39e00a94d310742e8f80))
* **middlewares:** update route files exports (named exports by methods) ([6a22e67](https://github.com/ecomplus/application-starter/commit/6a22e67135bc6110e6da6b4ab25f67ad8d77f597))

### [0.1.1](https://github.com/ecomplus/application-starter/compare/v0.1.0...v0.1.1) (2020-02-18)


### Features

* **env:** get 'pkg' from functions config ([bf45ec3](https://github.com/ecomplus/application-starter/commit/bf45ec33a2147d5be91fdc4955bd6cfa1b0867e2))
* **home:** set version and slug from root package, fix with uris ([d4b61fa](https://github.com/ecomplus/application-starter/commit/d4b61fab427aefdb2ac485d90eb1abe15d6aafc6))


### Bug Fixes

* **env:** firebase doesnt uppercase config ([502185e](https://github.com/ecomplus/application-starter/commit/502185ed30f346d8db77b849d6ba0eb48cb777cb))
* **require:** update @ecomplus/application-sdk dependency name ([d4174ac](https://github.com/ecomplus/application-starter/commit/d4174ac5425b85590db0e92d4b1d69a8567a6c55))

## [0.1.0](https://github.com/ecomplus/application-starter/compare/v0.0.4...v0.1.0) (2020-02-17)

### [0.0.4](https://github.com/ecomclub/firebase-app-boilerplate/compare/v0.0.3...v0.0.4) (2020-02-16)


### Bug Fixes

* **server:** update routes names (refresh-tokens) ([79a2910](https://github.com/ecomclub/firebase-app-boilerplate/commit/79a2910817cf4193b40e02b2b1e6b920e7fefb2d))

### [0.0.3](https://github.com/ecomclub/express-app-boilerplate/compare/v0.0.2...v0.0.3) (2020-02-15)


### Features

* **server:** start reading env options, handle operator token ([ce107b7](https://github.com/ecomclub/express-app-boilerplate/commit/ce107b74cde375e875a85cc3ba0cc6a73740785d))
* **update-tokens:** adding route to start update tokens service (no content) ([20c62ec](https://github.com/ecomclub/express-app-boilerplate/commit/20c62ec6800fc326b89e8cf54b2916f56e5910e4))


### Bug Fixes

* **auth-callback:** fix handling docRef (desn't need to get by id again) ([629ca5a](https://github.com/ecomclub/express-app-boilerplate/commit/629ca5ab9849e3822cc190f423da5bf2e0c4daab))
* **auth-callback:** save procedures if not new, check and set 'settep_up' ([#3](https://github.com/ecomclub/express-app-boilerplate/issues/3)) ([4a01f86](https://github.com/ecomclub/express-app-boilerplate/commit/4a01f86c37e09cd7c0363f6fbc80de6eeef3ba20))
* **ECOM_AUTH_UPDATE_INTERVAL:** disable set interval (no daemons on cloud functions) ([2aa2442](https://github.com/ecomclub/express-app-boilerplate/commit/2aa2442061f0308be9eb9430552fa04ad148788c))
* **env:** fixed to get appInfor variable ([e9b1a3c](https://github.com/ecomclub/express-app-boilerplate/commit/e9b1a3ce0d17ee74a5eada70589340fd5a70e786))
* **env:** fixed to get appInfor variable ([22687e2](https://github.com/ecomclub/express-app-boilerplate/commit/22687e25f611d49f8c01494af114e0289cec251e))
* **middleware:** check standard http headers for client ip ([5045113](https://github.com/ecomclub/express-app-boilerplate/commit/504511329afe9277d540f0f542a316d04634ce9e))

### 0.0.2 (2020-02-11)


### Bug Fixes

* **lib:** remove unecessary/incorrect requires with new deps ([69f2b77](https://github.com/ecomclub/express-app-boilerplate/commit/69f2b77))
* **routes:** fix handling appSdk (param) ([0cf2dde](https://github.com/ecomclub/express-app-boilerplate/commit/0cf2dde))
* **setup:** added initializeApp() to firebase admin ([e941e59](https://github.com/ecomclub/express-app-boilerplate/commit/e941e59))
* **setup:** manually setup ecomplus-app-sdk with firestore ([64e49f8](https://github.com/ecomclub/express-app-boilerplate/commit/64e49f8))
* **setup:** manually setup ecomplus-app-sdk with firestore ([c718bd0](https://github.com/ecomclub/express-app-boilerplate/commit/c718bd0))
* **setup:** manually setup ecomplus-app-sdk with firestore ([33909bf](https://github.com/ecomclub/express-app-boilerplate/commit/33909bf)), closes [/github.com/ecomclub/ecomplus-app-sdk/blob/master/main.js#L45](https://github.com/ecomclub//github.com/ecomclub/ecomplus-app-sdk/blob/master/main.js/issues/L45)
* **startup:** setup routes after appSdk ready, add home route ([d182555](https://github.com/ecomclub/express-app-boilerplate/commit/d182555))


### Features

* **firestore-app-boilerplate:** Initial commit ([c9963f0](https://github.com/ecomclub/express-app-boilerplate/commit/c9963f0))
* **firestore-app-boilerplate:** Initial commit ([be493ea](https://github.com/ecomclub/express-app-boilerplate/commit/be493ea))
* **firestore-support:** minor changes ([3718cba](https://github.com/ecomclub/express-app-boilerplate/commit/3718cba))
* **firestore-support:** refactoring to  use saveProcedures function ([62971ef](https://github.com/ecomclub/express-app-boilerplate/commit/62971ef))
* **firestore-support:** removed sqlite error clausule ([2d47996](https://github.com/ecomclub/express-app-boilerplate/commit/2d47996))
* **routes:** add home route (app json) ([42a3f2b](https://github.com/ecomclub/express-app-boilerplate/commit/42a3f2b))

# [LEGACY] Express App Boilerplate

### [0.1.1](https://github.com/ecomclub/express-app-boilerplate/compare/v0.1.0...v0.1.1) (2019-07-31)


### Bug Fixes

* **procedures:** fix checking for procedures array to run configureSetup ([1371cdc](https://github.com/ecomclub/express-app-boilerplate/commit/1371cdc))

## [0.1.0](https://github.com/ecomclub/express-app-boilerplate/compare/v0.0.2...v0.1.0) (2019-07-31)

### 0.0.2 (2019-07-31)


### Bug Fixes

* chain promise catch on lib getConfig ([281abf9](https://github.com/ecomclub/express-app-boilerplate/commit/281abf9))
* fix mergin hidden data to config ([8b64d58](https://github.com/ecomclub/express-app-boilerplate/commit/8b64d58))
* fix path to require 'get-config' from lib ([11425b0](https://github.com/ecomclub/express-app-boilerplate/commit/11425b0))
* get storeId from header and set on req object ([a3bebaa](https://github.com/ecomclub/express-app-boilerplate/commit/a3bebaa))
* handle error on get config instead of directly debug ([f182589](https://github.com/ecomclub/express-app-boilerplate/commit/f182589))
* routes common fixes ([2758a57](https://github.com/ecomclub/express-app-boilerplate/commit/2758a57))
* using req.url (from http module) instead of req.baseUrl ([d9057ca](https://github.com/ecomclub/express-app-boilerplate/commit/d9057ca))


### Features

* authentication callback ([8f18892](https://github.com/ecomclub/express-app-boilerplate/commit/8f18892))
* conventional store api error handling ([bcde87e](https://github.com/ecomclub/express-app-boilerplate/commit/bcde87e))
* function to get app config from data and hidden data ([ba470f5](https://github.com/ecomclub/express-app-boilerplate/commit/ba470f5))
* getting store id from web.js ([72f18c6](https://github.com/ecomclub/express-app-boilerplate/commit/72f18c6))
* handling E-Com Plus webhooks ([63ba19f](https://github.com/ecomclub/express-app-boilerplate/commit/63ba19f))
* main js file including bin web and local ([6b8a71a](https://github.com/ecomclub/express-app-boilerplate/commit/6b8a71a))
* pre-validate body for ecom modules endpoints ([f06bdb0](https://github.com/ecomclub/express-app-boilerplate/commit/f06bdb0))
* setup app package dependencies and main.js ([b2826ed](https://github.com/ecomclub/express-app-boilerplate/commit/b2826ed))
* setup base app.json ([015599a](https://github.com/ecomclub/express-app-boilerplate/commit/015599a))
* setup daemon processes, configure store setup ([db3ca8c](https://github.com/ecomclub/express-app-boilerplate/commit/db3ca8c))
* setup procedures object ([c5e8627](https://github.com/ecomclub/express-app-boilerplate/commit/c5e8627))
* setup web app with express ([d128430](https://github.com/ecomclub/express-app-boilerplate/commit/d128430))
