import TrashIcon from "../assets/icons/trash.svg?react";
import Badge from "../components/badge";
import Button from "../components/button";
import ButtonIcon from "../components/button-icon";
import Card from "../components/card";
import Container from "../components/container";
import Icon from "../components/icon";
import InputCheckbox from "../components/input-checkbox";
import InputText from "../components/input-text";
import Text from "../components/text";

export default function PageComponents() {
  return (
    <Container>
      <div className="flex flex-col gap-2">
        <Text variant={"body-sm-bold"} className="text-pink-base">
          Olá Mundo
        </Text>
        <Icon svg={TrashIcon} className="fill-green-base" />
        <div className="flex gap-1">
          <Badge variant={"secondary"}>5</Badge>
          <Badge variant={"primary"}>2 de 5</Badge>
          <Badge loading>5</Badge>
        </div>
        <div>
          <Button icon={TrashIcon}>Nova Tarefa</Button>
        </div>
        <div>
          <ButtonIcon icon={TrashIcon} />
          <ButtonIcon icon={TrashIcon} variant={"secondary"} />
          <ButtonIcon icon={TrashIcon} variant={"terciary"} />
          <ButtonIcon icon={TrashIcon} loading />
        </div>

        <div>
          <InputText />
        </div>
        <div>
          <InputCheckbox />
          <InputCheckbox loading />
        </div>
        <div>
          <Card size={"md"}>Olá Mundo</Card>
        </div>
      </div>
    </Container>
  );
}
