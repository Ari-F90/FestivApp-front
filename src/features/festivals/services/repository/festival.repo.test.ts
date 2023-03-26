import { Festival } from "../../models/festival";

import { FestivalApiRepo } from "./festival.repo";

const mockFestivalRepo = new FestivalApiRepo();

describe("Given the festival repo", () => {
  describe("When create a new instance and call method loadFestivals", () => {
    test("Then it should return the values loaded", async () => {
      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValue([{ name: "festival" }]),
      });

      expect(mockFestivalRepo).toBeInstanceOf(FestivalApiRepo);
      const loadAll = await mockFestivalRepo.loadFestivals(2);
      expect(loadAll).toEqual([{ name: "festival" }]);
    });
  });

  describe("When we call the loadByMusic method", () => {
    test("Then it should return the values with the same music type", async () => {
      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: jest
          .fn()
          .mockResolvedValue([{ name: "festival", musicType: "indie" }]),
      });

      expect(mockFestivalRepo).toBeInstanceOf(FestivalApiRepo);
      const loadByMusic = await mockFestivalRepo.loadByMusic("test");
      expect(loadByMusic).toEqual([{ name: "festival", musicType: "indie" }]);
    });
  });

  describe("When it calls the method loadOneFestival", () => {
    test("Then it should return the value of one festival", async () => {
      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValue({ id: "1", name: "festival1" }),
      });

      const getOneFestival = await mockFestivalRepo.loadOneFestival("1");
      expect(getOneFestival).toEqual({ id: "1", name: "festival1" });
    });
  });

  describe("When it calls the method createFestival", () => {
    const mockFestival = {
      name: "festival2",
      city: "Madrid",
    } as unknown as Festival;
    test("Then it should return the value created", async () => {
      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: jest
          .fn()
          .mockResolvedValue({ name: "festival2", city: "Madrid" }),
      });

      await mockFestivalRepo.createFestival(mockFestival);
      expect(mockFestival).toEqual({ name: "festival2", city: "Madrid" });
    });
  });

  describe("When it calls the method update", () => {
    const updatedFestival = {
      id: "2",
      name: "festival2",
      city: "Madrid",
    } as unknown as Festival;
    test("Then it should return the updated value", async () => {
      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: jest
          .fn()
          .mockResolvedValue({ id: "2", name: "festival2", city: "Madrid" }),
      });
      await mockFestivalRepo.updateFestival(updatedFestival);
      expect(updatedFestival).toEqual({
        id: "2",
        name: "festival2",
        city: "Madrid",
      });
    });
  });

  describe("When it calls the method delete", () => {
    test("Then it should call fetch with no return", async () => {
      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: jest.fn(),
      });

      const deleteFestival = await mockFestivalRepo.deleteFestival("2");
      expect(fetch).toHaveBeenCalled();
      expect(deleteFestival).toBe(undefined);
    });
  });

  describe("When loadFestivals method fails", () => {
    test("Then it should throw an error", async () => {
      global.fetch = jest.fn().mockResolvedValue("Error found");
      const loadAll = mockFestivalRepo.loadFestivals(2);
      await expect(loadAll).rejects.toThrow();
    });
  });

  describe("When loadByMusic method fails", () => {
    test("Then it should throw an error", async () => {
      global.fetch = jest.fn().mockResolvedValue("Error found");
      const loadByMusic = mockFestivalRepo.loadByMusic("test");
      await expect(loadByMusic).rejects.toThrow();
    });
  });

  describe("When loadOneFestival method fails", () => {
    test("Then it should throw an error", async () => {
      global.fetch = jest.fn().mockResolvedValue("Error found");
      const getOneFestival = mockFestivalRepo.loadOneFestival("1");
      await expect(getOneFestival).rejects.toThrow();
    });
  });

  describe("When create method fails", () => {
    const mockCreatedFestival = {
      email: "test",
      passwd: "12",
    } as unknown as Festival;
    test("Then it should throw an error", async () => {
      global.fetch = jest.fn().mockResolvedValue({
        ok: false,
        json: jest.fn().mockResolvedValue(undefined),
      });
      await expect(
        mockFestivalRepo.createFestival(mockCreatedFestival)
      ).rejects.toThrow();
      expect(fetch).toHaveBeenCalled();
    });
  });

  describe("When update method fails", () => {
    test("Then it should throw an error", async () => {
      global.fetch = jest.fn().mockResolvedValue("Error found");
      const update = mockFestivalRepo.updateFestival({ name: "festival4" });
      await expect(update).rejects.toThrow();
    });
  });

  describe("When delete method fails", () => {
    test("Then it should throw an error", async () => {
      global.fetch = jest.fn().mockResolvedValue("Error found");
      const deleteFestival = mockFestivalRepo.deleteFestival("1");
      await expect(deleteFestival).rejects.toThrow();
    });
  });
});
