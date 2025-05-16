import styled from '@emotion/styled'

export const DashboardWrapper = styled.div`
    max-width: 1600px;
    width: 100%;
    box-sizing: border-box;

    @media (max-width: 768px) {
        padding: 0 12px;
    }
`

export const TopSummary = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 25px 40px;
    margin-bottom: 32px;
    background-color: #f0f2f5;
    border-radius: 12px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

    @media (max-width: 768px) {
        padding: 20px;
        gap: 16px;
    }
`

export const TopHeaderRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 12px;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
        gap: 8px;
    }
`

export const GreetingSection = styled.div`
    display: flex;
    flex-direction: column;

    h1 {
        font-size: 24px;
        font-weight: 700;
        margin: 0;

        @media (max-width: 768px) {
            font-size: 20px;
        }
    }

    span {
        font-size: 14px;
        color: #777;
        margin-bottom: 12px;

        @media (max-width: 768px) {
            font-size: 13px;
        }
    }
`

export const ActionsSection = styled.div`
    display: flex;
    gap: 12px;
    flex-wrap: wrap;

    input {
        height: 38px;
        padding: 0 14px;
        border: 1px solid #d1d5db;
        border-radius: 8px;
        font-size: 14px;
        outline: none;
        transition: border 0.2s;

        &:focus {
            border-color: #4a5cff;
        }

        @media (max-width: 768px) {
            width: 100%;
        }
    }

    button {
        height: 38px;
        padding: 0 14px;
        color: white;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        font-weight: 500;

        @media (max-width: 768px) {
            width: 100%;
        }
    }
`

export const CardRow = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 10px;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 16px;
    }
`

export const MainContent = styled.div`
    display: flex;
    gap: 24px;
    background: #fff;
    border-radius: 16px;
    padding: 32px;
    min-height: 400px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.03);

    h2 {
        margin-bottom: 10px;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        padding: 20px;
        gap: 16px;
    }
`

export const SectionHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;

    h2 {
        margin: 0;
        font-weight: 600;
        font-size: 20px;
    }
`

export const ViewAllButton = styled.h3`
    margin: 0;
    font-weight: 500;
    font-size: 14px;
    color: #ff9500;
    cursor: pointer;
    text-decoration: underline;

    &:hover {
        color: #ff9500;
    }

    @media (max-width: 768px) {
        font-size: 13px;
    }
`
