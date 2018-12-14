import React from "react";
import styled from "styled-components";
import Icon from "@mdi/react";
import {
  mdiCheckboxBlankCircleOutline,
  mdiCheckboxMarkedCircleOutline
} from "@mdi/js";

const ConfiguredIcon = ({ path }) => <Icon path={path} size={1} />;

const TodoListItemCheckbox = ({ checked }) =>
  checked ? (
    <ConfiguredIcon path={mdiCheckboxMarkedCircleOutline} />
  ) : (
    <ConfiguredIcon path={mdiCheckboxBlankCircleOutline} />
  );

export default TodoListItemCheckbox;
