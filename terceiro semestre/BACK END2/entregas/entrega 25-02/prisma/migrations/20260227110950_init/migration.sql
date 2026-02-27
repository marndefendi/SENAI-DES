/*
  Warnings:

  - Added the required column `ano` to the `Carros` table without a default value. This is not possible if the table is not empty.
  - Added the required column `marca` to the `Carros` table without a default value. This is not possible if the table is not empty.
  - Added the required column `modelo` to the `Carros` table without a default value. This is not possible if the table is not empty.
  - Added the required column `placa` to the `Carros` table without a default value. This is not possible if the table is not empty.
  - Added the required column `CNH` to the `Clientes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `CPF` to the `Clientes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `Clientes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `carros` ADD COLUMN `ano` INTEGER NOT NULL,
    ADD COLUMN `marca` VARCHAR(191) NOT NULL,
    ADD COLUMN `modelo` VARCHAR(191) NOT NULL,
    ADD COLUMN `placa` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `clientes` ADD COLUMN `CNH` INTEGER NOT NULL,
    ADD COLUMN `CPF` INTEGER NOT NULL,
    ADD COLUMN `email` VARCHAR(191) NOT NULL;
