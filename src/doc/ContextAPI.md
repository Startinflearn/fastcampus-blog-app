### Context API
`REACT가 자체적으로 제공하는 상태관리 방법`

- 컴포넌트 트리 안에서 전역적으로 사용할 수 있는 값 관리
- Props Drilling을 피하고, 컴포넌트 간 상태를 쉽게 공유 가능
- 데이터를 공유하기 위한 방법
- Ex) 로그인한 사용자의 정보, 테마, 언어설정 등

장점
- Prop Drilling 문제 해결
- 추가적인 라이브러리 설치 x
단점
- 복잡한 상태 관리는 어려울 수 있음
- 너무 많은 Context를 사용하면 재사용성 떨어짐

사용사례 : 다크모드 구현 , 다국어 처리 구현

#### context API 사용방법
1. Context 생성
```tsx
import {createContext} from 'react'
export const LevelContext = createContext(1);
```
2. Provider 설정
```tsx
import {LevelContext} from './LevelContext.ts';

export default function Section({level, children}){
    return (
        <section className="section">
            <LevelContext.Provider value={level}>
                {childen}
            </LevelContext.Provider>
        </section>
    )
}

```

3. Consumer 설정
```tsx
import {LevelContext} from './LevelContext.ts';

export default function Heading({children}){
    return (
      
            <LevelContext.Consumer>
                {({level})=> (
                    <div>{level}</div>
                )}
            </LevelContext.Consumer>

    )
}
```

4.useContext 훅 사용

```tsx
import {useContext} from "react";
import {LevelContext} from './LevelContext.ts';

export default function Heading({children}){
    const level = useContext(LevelContext);
    
    // 전역 상태인 level  값 사용
}
```