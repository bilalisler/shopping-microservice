<?php

namespace App\Enums;

enum ProductStatus: string
{
    use BaseEnum;

    case Published = 'P';
    case Draft = 'D';
}
