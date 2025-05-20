import { Task } from 'types/issueTaskList.type'

export const issues: Task[] = [
    {
        id: '1',
        author: '홍길동',
        status: '진행중',
        title: '회원가입 API 에러 수정',
        description:
            'POST /api/signup 요청 시 500 오류 발생. 원인 분석 및 수정 필요.',
        createdAt: '2025-05-20',
    },
    {
        id: '2',
        author: '이영희',
        status: '대기',
        title: '대시보드 통계값 오류',
        description: '접속자 수 통계가 비정상적으로 표시됨. 쿼리 확인 필요.',
        createdAt: '2025-05-19',
    },
    {
        id: '3',
        author: '김철수',
        status: '완료',
        title: '프로젝트 목록 필터 추가',
        description: '진행 중 / 완료 구분 필터 기능 구현 요청됨.',
        createdAt: '2025-05-18',
    },
    {
        id: '4',
        author: '박민수',
        status: '진행중',
        title: '모바일 UI 깨짐 현상',
        description:
            'iOS Safari에서 버튼 정렬이 깨지는 문제 발생. CSS 수정 필요.',
        createdAt: '2025-05-17',
    },
    {
        id: '5',
        author: '최지우',
        status: '대기',
        title: '알림 기능 개선',
        description:
            '읽지 않은 알림이 상단에 우선 표시되도록 정렬 방식 변경 요청.',
        createdAt: '2025-05-16',
    },
    ...Array.from({ length: 45 }, (_, i) => {
        const id = (i + 6).toString()
        const authors = [
            '홍길동',
            '이영희',
            '김철수',
            '박민수',
            '최지우',
            '장서연',
            '한지민',
            '조승우',
        ]
        const statuses = ['진행중', '대기', '완료']
        const titles = [
            'API 응답 속도 개선',
            '로그인 리디렉션 문제',
            'UI 다크모드 추가',
            '파일 업로드 제한 확장',
            '자동 로그아웃 시간 수정',
            '서버 부하 분산 작업',
            '보안 취약점 점검',
            '프로필 이미지 업로드 오류',
        ]
        const descriptions = [
            '관련 로그 확인 필요.',
            '백엔드 응답 구조 점검 요청.',
            '디자인 가이드에 맞게 수정해야 함.',
            '반응형 문제 확인 필요.',
            '쿼리 성능 개선 작업 필요.',
            '캐시 전략 재검토 필요.',
            '정렬 기준이 잘못 적용됨.',
            'DB 연결 시도 실패 원인 파악 필요.',
        ]
        const createdAt = `2025-05-${15 - (i % 10)}`

        return {
            id,
            author: authors[i % authors.length],
            status: statuses[i % statuses.length],
            title: titles[i % titles.length],
            description: descriptions[i % descriptions.length],
            createdAt,
        }
    }),
]
