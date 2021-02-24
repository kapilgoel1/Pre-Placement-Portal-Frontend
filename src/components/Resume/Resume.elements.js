import styled from "styled-components";
import { Button } from "reactstrap";

export const NavigationSection = styled.div`
  margin-top: 40px;
  display: flex;
`;

export const Continue = styled(Button).attrs((props) => ({
  type: "submit",
}))`
  margin-left: auto;
`;

export const Previous = styled(Button)``;

export const Skill = styled.div`
  display: flex;
`;

export const SkillNumber = styled.h4`
  width: 40px;
  margin-top: auto;
  margin-bottom: auto;
`;

export const Responsibiltity = styled.div`
  display: flex;
`;

export const ResponsibilityNumber = styled.h6`
  width: 20px;
  margin-top: auto;
  margin-bottom: auto;
`;

export const Achievement = styled.div`
  display: flex;
`;

export const AchievementNumber = styled.h4`
  width: 40px;
  margin-top: auto;
  margin-bottom: auto;
`;

export const WithDelete = styled.div`
  display: flex;
`;

export const Delete = styled(Button)`
  margin-left: auto;
`;
