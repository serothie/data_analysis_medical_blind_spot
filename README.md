## 프로젝트 구성 안내

## 1. 프로젝트 소개

본 프로젝트는

1. 의료와 관련된 여러 지표들을 지역 단위로 점수화하고,
2. 해당 점수를 기준으로 지도에 음영화하여 의료사각지대를 시각적으로 표시하는 서비스임

- 사용한 데이터
  [보건복지부-복지로] 기초생활보장 수급자구분별 수급가구수, 수급자수
  [KOSIS] 행정구역(시군구)별, 성별 인구수
  [KOSIS] 도시지역 인구현황
  [KOSIS] 의료기관 및 병상수
  [KOSIS] 구급차 수 및 배치된 응급구조사 수(시도별)
  [KOSIS] 인구 천명당 의료기관 종사 의사수(시도/시/군/구)
- 기술 스택
  [BackEnd] Python, Jupyter notebook, Pymongo, Flask
  [FrontEnd] React, react-router-dom, redux, material-ui, styled-component, axios
- 사용된 라이브러리 (numpy, matplotlib, wordcloud 등)
  Numpy, Pandas, matplotlib, seaborn, pyplotplt
- 웹서비스에 대한 자세한 개요

  [메인페이지]

  1. 병원수, 응급차수, 의사수, 의료수급권자별 진료 건수 등 4개 지표를
     지역 단위로 점수화하고 해당 점수를 바탕으로 지도에 음영화하여 표시

  2. 특정 지역에 마우스 hover 시:

  - 상기 4개 지표를 기준으로 한 해당 지역의 의료사각지대 점수를
    전국 평균과 비교하여 +- %로 설명하는 메세지 표기
  - 해당 지역의 여러 지표 정보를 볼수 있는 상세페이지 이동 버튼 제시

  [상세페이지]

  - 해당 지역에 대한 정보 (지역 vs 전국 평균)

  - 해당 지표에 대한 정보 (지역 간 비교)

## 2. 프로젝트 목표

현재 대부분 서울 및 수도권에 거주하는 사람들으로서, 우리는 지방의 의료문제의 심각성을 알고는 있으나 정확히 체감하지는 못했다.
이에 우리는 병원 및 의사 수, 응급 시설 수, 진료 건수 네 가지의 지표에 대해 지방과 수도권의 지표를 비교 및 분석해
지방의 의료사각지대 문제를 시각화하고자 하며, 이에 따라 개선되어야 할 수치를 점수화해 제공하고자 한다.

## 3. 프로젝트 기능 설명

- 메인페이지에는 각 지표에 따라 전국 지도를 음영화해 나타냄으로써 지역별 지표를 한 눈에 알고
  마우스오버 시 간단한 지표를 한 눈에 볼 수 있어 시각적으로 간편하게 자료를 확인할 수 있다.

- 상세페이지에는 메인페이지에 나타나지 않은 자세한 자료들을 전국과 비교해 그래프로 나타내었고 이에 따라
  정확한 수치와 해당 지역의 의료 심각성 정도를 확인할 수 있다.

## 4. 프로젝트 구성도

스토리보드: [https://s3.us-west-2.amazonaws.com/secure.notion-static.com/9cb8a059-e8d1-4466-8b83-858e3cbaada8/.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210416T045820Z&X-Amz-Expires=86400&X-Amz-Signature=f7c9426bfd09a54b23b182347c5649bee12e6d4885f53476cbb1762107343e10&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25EC%258A%25A4%25ED%2586%25A0%25EB%25A6%25AC%25EB%25B3%25B4%25EB%2593%259C.pdf%22]()

## 5. 프로젝트 팀원 역할 분담

| 이름   | 담당 업무                                                |
| ------ | -------------------------------------------------------- |
| 강현우 | 데이터 분석/백엔드 개발                                  |
| 고태섭 | 데이터 분석/백엔드 개발/프론트엔드 개발                  |
| 이혁준 | 데이터 분석/백엔드 개발/프로젝트 제안서 및 발표자료 작성 |
| 박연빈 | 프론트엔드 개발                                          |

**멤버별 responsibility(R&R, Role and Responsibilities)**

1. 리더

- 기획 단계: 구체적인 설계와 지표에 따른 프로젝트 제안서 작성
- 개발 단계: 팀원간의 일정 등 조율 + 프론트 or 백엔드 개발
- 수정 단계: 기획, 스크럼 진행, 코치님 피드백 반영해서 수정, 발표 준비

2. 프론트엔드

- 기획 단계: 큰 주제에서 문제 해결 아이디어 도출, 데이터 수집, 와이어프레임 작성
- 개발 단계: 와이어프레임을 기반으로 구현, 데이터 처리 및 시각화 담당, UI 디자인 완성
- 수정 단계: 피드백 반영해서 프론트 디자인 수정

3.  백엔드 & 데이터 담당

- 기획 단계: 기획 데이터 분석을 통해 해결하고자 하는 문제를 정의

- 개발 단계: 웹 서버 사용자가 직접 백엔드에 저장할수 있는 기능 구현, 데이터 베이스 구축 및 API 활용, 데이터 분석 개념 총동원하기

- 수정 단계: 피드백 반영해서 분석/ 시각화 방식 수정

## 6. 버전

- ver 2.5

## 7. FAQ
