"use client";
import { useState } from "react";
import { useParams, useRouter } from "next/navigation";

import {
  Check,
  ChevronsUpDown,
  PlusCircle,
  Store as StoreIcon,
} from "lucide-react";
import { Store } from "@prisma/client";

import { useStoreModal } from "@/hooks/useStoreModal";
import { cn } from "@/lib/utils";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandEmpty,
  CommandSeparator,
} from "@/components/ui/command";

type PopoverTriggerProps = React.ComponentPropsWithRef<typeof PopoverTrigger>;

interface StoreSwitcherProps extends PopoverTriggerProps {
  items: Store[];
}

export function StoreSwitcher({ className, items = [] }: StoreSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);
  const storeModal = useStoreModal();
  const params = useParams();
  const router = useRouter();

  const formattedItems = items.map((item) => ({
    label: item.name,
    value: item.id,
  }));

  const currentStore = formattedItems.find(
    (item) => item.value === params.storeId
  );

  const onStoreSelect = (store: { value: string; label: string }) => {
    setIsOpen(false);
    router.push(`/${store.value}`);
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          role="combobox"
          aria-expanded={isOpen}
          aria-label="Select a store"
          className={cn("w-[200px] justify-between", className)}
        >
          <StoreIcon className="mr-2 h-4 w-4" />
          {currentStore?.label}
          <ChevronsUpDown className="ml-auto h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandList>
            <CommandInput placeholder="Search store..." />
            <CommandEmpty>No store found.</CommandEmpty>
            <CommandGroup heading="Stores">
              {formattedItems.map((item, key) => {
                return (
                  <CommandItem
                    key={key}
                    onSelect={() => onStoreSelect(item)}
                    className="text-sm"
                  >
                    <StoreIcon className="mr-2 h-4 w-4" />
                    {item.label}
                    <Check
                      className={cn(
                        "ml-auto h-4 w-4",
                        currentStore?.value === item.value
                          ? "opacity-100"
                          : "opacity-0"
                      )}
                    />
                  </CommandItem>
                );
              })}
            </CommandGroup>
          </CommandList>
          <CommandSeparator />
          <CommandList>
            <CommandGroup>
              <CommandItem
                onSelect={() => {
                  setIsOpen(false);
                  storeModal.onOpen();
                }}
              >
                <PlusCircle className="mr-2 h-5 w-5" />
                Create Store
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
