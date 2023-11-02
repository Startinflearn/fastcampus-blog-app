### FireBase Store
`FireBase 에서 제공하는 NoSql 형식의 클라우드 데이터베이스`

- 애플리케이션 개발을 하다보면 데이터를 저장하고 불러오는 일이 매우 중요한데, Clode Firestore는 이러한 일을 쉽게 도와줌
- Firestore는 실시간 데이터 동기화를 지원하며, 웹, 안드로이드, IOS에서 데이터를 저장하고 동기화 할 수 있음
- 데이터는 문서(document)와 컬렉션(collection)의 형태로 저장되며, 이는 효율적인 쿼리작성을 가능하게 함
- 오프라인 지원 제공

#### 장점
- 실시간 데이터 동기화 
  - 실시간 채팅 및 데이터 분석 등 실시간 기능 애플리케이션 개발
- 구조화된 데이터
  -  문서 - 컬렋션 형태로 데이터 저장 / 구조화된 데이터 쉽게 저장하고 불러올 수 있음
- 보안 
  - 사용자 기반의 보안규칙설정 가능

#### 사용예시
- 다양한 유형의 애플리케이션에 사용
  - Ex) 실시간 채팅 앱
- 다양한 데이터 저장 및 불러올 수 있음
  - Ex) 게임 점수, 사용자 설정, 텍스트, 이미지
- 사용자별 데이터 접근 권환 관리
  - 사용자 인증 정보와 함께 사용됨

#### Firestore 사용 방법
1. Firebase 프로젝트 생성 & Firebase SDK 앱 추가
2. Firestore 인스턴스 가져오기
```tsx
import {initailizeApp, FirebaseApp, getApp} from 'firebase/app';
import {getFirestore} from "/firebase/firestore"
import firebaseApp from "./firebaseApp";

export let app: FirebaseApp;

const firebaseConfig = {...}

try {
    app = getApp("app");
} catch (e) {
    app = initailizeApp(firebaseConfig, "app");
}

// Firebase NoSQL DataBase
export const db = getFirestore(app);
```

3. Firestore 서비스 사용하기

```tsx
import {db} from "firebaseApp";
import {collection} from "@firebase/firestore";

const onSubmit = async (e: any) => {
    e.preventDefault();

    try {
        //firestore db저장
        await addDoc(collection(db,"posts"), {
            ...
        });
        toast.success("게시글을 생성했습니다.")
    }catch (e:any){
        console.log(e)
    }
}
```