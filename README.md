# 動手搞定GCP部署工作

### 目錄

* [現在的開發長什麼樣子？](/#)


    * [簡介目前常見的開發流程和專案架構](/#)


    * [簡介前端開發者對於部署認識的必要性](/#)


    * [我們在什麼位置？](/#)



* [GCP常用資源](/#)


    * [Google App Engine (GAE)](/#)


    * [Google Compute Engine (GCE)](/#)


    * [Google Kubernetes Engine (GKE)](/#)


    * [Google Kubernetes Engine (GKE)](/#)


    * [Google SQL](/#)


    * [Google Storage](/#)


    * [Google gcloud SDK](/#)


* [動手做-在GCE開一台機器](/#)

    * [選擇你想要的機器](/#)

    * [靜態IP設定](/#)

    * [防火牆設定](/#)

* [安裝你的機器](/#)

    * [git](/#)

    * [docker](/#)

    * [nginx](/#)

* [Docker化你的專案](/#)

    * [為什麼建議Docker化](/#)

    * [撰寫簡單的Dockerfile](/#)

    * [打包一個image](/#)

    * [測試Docker](/#)

* [使用GCR 管理Docker Image](/#)

    * [推上去GCP](/#)

* [在GCE中簡單地使用Docker](/#)

    * [把你的image拉下來](/#)

    * [測試你的Docker跑不跑得起來](/#)

* [網域設定](/#)

    * [以godaddy來示範](/#)

* [使用NGINX](/#)

    * [為什麼要用nginx？](/#)

    * [nginx指向設定](/#)

* [在Docker中操作git](/#)

* [還可以怎麼精進自己？](/#)

    * [學習docker-compose](/#)

    * [學習怎麼一次部署前後端和DB](/#)
		
    * [為自己的網站設置SSL](/#)

## 現在的開發長什麼樣子？

### 專案架構

* 從MVC到前後端分離

    * 推薦文章：[跟著小明一起搞懂技術名詞：MVC、SPA 與 SSR](https://medium.com/@hulitw/introduction-mvc-spa-and-ssr-545c941669e9)

* 漸漸地把前端和後端分開，當然現在組織越大的開發團隊有越多的分工角色，專案也分開，各自在專案中的專業技術也越來越複雜。

    [WEB DEVELOPER ROADMAP 2019](https://github.com/goodjack/developer-roadmap-chinese)


### 前端開發者需要了解部署的重要性

情境一：管Server的人非常好，也非常嚴謹，所有更新他必定是親自來，前端、API開發人員的更新都交給他統一上去。

情境二：管Server的人同時要管好幾個服務，即便他定義了很多嚴謹的規範，但是他沒辦法每次都及時幫忙開發人員提交更新。

情境三：根本沒有Server人員，只有一台機器各自表述。


## 機器

## GCP常用資源介紹

* Google Compute Engine (GCE)
* Google App Engine (GAE)
* Google Container Registry (GCR)
* Google Kubernetes Engine (GKE)
* Google SQL
* Google Storage

* gcloud SDK

## 在GCE實戰開一台機器 

## Docker 化你的專案

### 為什麼建議Docker化？

1. 更快速的交付和部署
2. 更輕鬆的遷移和擴展
3. 更簡單的管理

* [Docker 官網](https://dotblogs.com.tw/explooosion/2018/09/15/194754)
* [《Docker —— 從入門到實踐­》正體中文版](https://legacy.gitbook.com/book/philipzheng/docker_practice/details)
* [為什麼要使用 Docker？](https://philipzheng.gitbooks.io/docker_practice/content/introduction/why.html)
* [Docker - 容器化 Node.js express](https://dotblogs.com.tw/explooosion/2018/09/15/194754)

## 使用GCR 管理Docker Image

## 在GCE中簡易地使用Docker

## nginx 部署

## 網域的設定

## 在Docker中使用git去做版本控制

## 持續未完成可以探索的挑戰


