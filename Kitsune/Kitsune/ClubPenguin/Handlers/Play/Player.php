<?php

namespace Kitsune\ClubPenguin\Handlers\Play;

use Kitsune\ClubPenguin\Packets\Packet;

trait Player {

	protected function handleLoadPlayerObject($socket) {
		$penguin = $this->penguins[(int) $socket];
		$playerId = Packet::$Data[2];

		if($penguin->database->playerIdExists($playerId)) {
			$playerArray = $penguin->database->getColumnsById($playerId, array("Username", "Color", "Head", "Face", "Neck", "Body", "Hand", "Feet", "Flag", "Photo"));

			array_splice($playerArray, 1, 0, array(45));

			$playerString = implode("|", $playerArray);
			$penguin->send("%xt%gp%{$penguin->room->internalId}%$playerId|$playerString%");
		}
	}

	protected function handleGetLastRevision($socket) {
		$this->penguins[(int) $socket]->send("%xt%glr%-1%10000%");
	}

	protected function handleSendPlayerMove($socket) {
		$penguin = $this->penguins[(int) $socket];

		$penguin->x = Packet::$Data[2];
		$penguin->y = Packet::$Data[3];
		$penguin->frame = 1;
		$penguin->room->send("%xt%sp%{$penguin->room->internalId}%{$penguin->id}%{$penguin->x}%{$penguin->y}%");
	}

	protected function handleSendPlayerFrame($socket) {
		$penguin = $this->penguins[(int) $socket];

		$penguin->frame = Packet::$Data[2];
		$penguin->room->send("%xt%sf%{$penguin->room->internalId}%{$penguin->id}%{$penguin->frame}%");
	}

	protected function handleSendHeartbeat($socket) {
		$penguin = $this->penguins[(int) $socket];

		$penguin->send("%xt%h%{$penguin->room->internalId}%");
	}

	protected function handleUpdatePlayerAction($socket) {
		$penguin = $this->penguins[(int) $socket];
		$actionId = Packet::$Data[2];

		$penguin->room->send("%xt%sa%{$penguin->room->internalId}%{$penguin->id}%{$actionId}%");
	}

	protected function handleSendEmote($socket) {
		$penguin = $this->penguins[(int) $socket];
		$emoteId = Packet::$Data[2];

		$penguin->room->send("%xt%se%{$penguin->room->internalId}%{$penguin->id}%$emoteId%");
	}

	protected function handlePlayerThrowBall($socket) {
		$penguin = $this->penguins[(int) $socket];

		$x = Packet::$Data[2];
		$y = Packet::$Data[3];

		$penguin->room->send("%xt%sb%{$penguin->room->internalId}%{$penguin->id}%$x%$y%");
	}

	protected function handleSafeMessage($socket) {
		$penguin = $this->penguins[(int) $socket];
		$messageId = Packet::$Data[2];

		if(is_numeric($messageId)) {
			$penguin->room->send("%xt%ss%{$penguin->room->internalId}%{$penguin->id}%$messageId%");
		}
	}

	protected function handleSendJoke($socket) {
		$penguin = $this->penguins[(int) $socket];

		$jokeId = Packet::$Data[2];

		if(is_numeric($jokeId)) {
			$penguin->room->send("%xt%sj%{$penguin->room->internalId}%{$penguin->id}%{$jokeId}%");
		}
	}

	protected function handleSendLineMessage($socket) {
		$penguin = $this->penguins[(int) $socket];

		$lineId = Packet::$Data[2];

		if(is_numeric($lineId)) {
			$penguin->room->send("%xt%sl%{$penguin->room->internalId}%{$penguin->id}%{$lineId}%");
		}
	}

}

?>
