<?php

namespace App\Enums;

trait BaseEnum
{
    public function trans(): ?string
    {
        foreach (self::cases() as $case) {
            if ($case === $this) {
                return $case->name; // @TODO: implement translation
            }
        }

        return null;
    }
}
